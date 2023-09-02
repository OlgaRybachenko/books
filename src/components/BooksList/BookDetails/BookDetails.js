import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { getBookById } from "../../../api/booksApi";

function BookDetails({ bookId }) {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBookById(bookId)
    // fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    // .then((response) => response.json())
    // .then((data) => {
    //   setBook(data);
    .then((response) => {
      setBook(response.data);
      setError(false);
    })
    .catch((error) => {
      console.error(error);
      setError(true);
    });
  }, [bookId]);

  if (!book) {
     return <div>Loading...</div>    // загрузочный блок
  }
  if (error) {
    return <div className="container">Book not found.</div>
  }

  return (
    <div className="book">
       <h2>{book.volumeInfo.title ? book.volumeInfo.title : 'No title'}</h2>   {/*название книги */}
       <h3>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "No autors"}</h3>    {/* авторы */}
       <div>{book.volumeInfo.description ? parse(book.volumeInfo.description) : 'No description avalable'}</div> {/*если есть, то парсим */}
       {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}  {/*проверяем картинки */}
      
    </div>
  )
}
export default BookDetails;
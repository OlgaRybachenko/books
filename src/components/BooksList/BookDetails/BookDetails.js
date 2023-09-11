import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { getBookById } from "../../../api/booksApi";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBookById(bookId)
    .then((response) => {
      setBook(response.data);
    })
    .catch((error) => {
      console.error(error);
      setBook({});
      setError(true);
    });
  }, [bookId]);

  if (!book) {
     return <div>Loading...</div>    // загрузочный блок
  }
  if (error) {
    return <div className="container">Book not found.</div>    //Если такой книги не существует
  }

  return (
    <div className="book">
      <div className="container">
       <h2>{book.volumeInfo.title ? book.volumeInfo.title : 'No title'}</h2>   {/*название книги */}
       <h3>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "No autors"}</h3>    {/* авторы */}
       <div>{book.volumeInfo.description ? parse(book.volumeInfo.description) : 'No description avalable'}</div> {/*если есть, то парсим */}
       {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}  {/*проверяем картинки */}
       {book.volumeInfo.previewLink && (
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Preview Book</a>  //переход по ссылке на страницу за пределы сайта
       )}
       </div>
    </div>
  )
}

export default BookDetails;
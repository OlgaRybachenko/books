import React, { useEffect, useState} from 'react';
import { getBookBySearchTerm } from '../../api/booksApi';


function BooksList({ search, onSelectBook }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (search) {
      getBookBySearchTerm(search)
      // fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      // .then((response) => response.json())
      .then((response) => {
        if (response.data.items) {
          setBooks(response.data.items);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => console.error(error));
    }
  }, [search]);
  return (
    <div className='books'>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a title='book name' href='#' onClick={() =>
            onSelectBook(book.id)}>
            {book.volumeInfo.title}</a>
            </li>
        ))}
      </ul>

    </div>

  );
}

export default BooksList;
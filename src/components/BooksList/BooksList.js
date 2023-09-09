import React, { useContext, useEffect, useState} from 'react';
import { getBookBySearchTerm } from '../../api/booksApi';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context';



function BooksList() {
  const { search } = useContext(SearchContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {

    if (search) {
      getBookBySearchTerm(search)
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
      <div className='container'>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Link to={`/book/${book.id}`} title={book.volumeInfo.title}>{book.volumeInfo.title}</Link>
            {/* <a title='book name' href='#' onClick={() =>
            onSelectBook(book.id)}>
            {book.volumeInfo.title}</a> */}
            </li>
        ))}
      </ul>
      </div>
    </div>

  );
}

export default BooksList;
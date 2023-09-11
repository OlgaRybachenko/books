import React, { useContext, useEffect, useState, useMemo } from 'react';
import { getBookBySearchTerm } from '../../api/booksApi';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context';
import FilterBar from '../FilterBar/FilterBar';
import './BooksList.css'

function BooksList() {
  const { search, filters } = useContext(SearchContext);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;       //лимит 10 книг
  const hanlePageChange = ( pageNumber) => {
    setCurrentPage(pageNumber);
  }
  useEffect(() => {

    if (search) {
      getBookBySearchTerm(search, currentPage, booksPerPage, filters)
      .then((response) => {
        if (response.data.items) {
          setBooks(response.data.items);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => console.error(error));
    }
  }, [search, currentPage, filters]);
  const memoizedBooks = useMemo(() =>              //сохраняем запросы в память
    books.map((book, index) => (
      <li key={index}>
        <Link to={`/book/${book.id}`} title={book.volumeInfo.title}>{book.volumeInfo.title}</Link>
        </li>
    )), [books],
  );
  return (
    <div className='books'>
      <div className='container'>
      {search && books.length > 0 &&<h1>Books</h1>}
      {search && <FilterBar />}
      <ul>
        {memoizedBooks}
      </ul>
      {search && books.length > 0 && (
        <>
        <button className='previous round' onClick={() => hanlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>        {/*управление переключением страниц*/}
        <button className='next round' onClick={() => hanlePageChange(currentPage + 1)}>Next</button>
        </>
      )}
      </div>
    </div>
  );
}

export default BooksList;
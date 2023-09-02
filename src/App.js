import BooksList from './components/BooksList/BooksList';
import './App.css';
import React, { useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BookDetails from './components/BooksList/BookDetails/BookDetails';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './components/NotFount/NotFount';
import About from './components/About/About';


function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
    <div className="app">
      <SearchBar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<BooksList search={search} />}>
        </Route>
        <Route path='/book/:bookId' element={<BookDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Navigate to='/404' />}></Route>
        <Route path='/404' element={<NotFound />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

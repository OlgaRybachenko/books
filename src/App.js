import BooksList from './components/BooksList/BooksList';
import './App.css';
import React, { useState} from 'react';
// import SearchBar from './components/SearchBar/SearchBar';
import BookDetails from './components/BooksList/BookDetails/BookDetails';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './components/NotFount/NotFount';
import About from './components/About/About';
import { ThemeContext,SearchContext } from './context';
import Header from './components/Header/Header';
// import ThemeToggler from './components/ThemeToggler/ThemeToggler';


function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));  //меняем тему
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <SearchContext.Provider value={{ search, setSearch, filters, setFilters }}>
    
    <Router>
    <div className="app">
      <Header setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<BooksList />}>
        </Route>
        <Route path='/book/:bookId' element={<BookDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Navigate to='/404' />}></Route>
        <Route path='/404' element={<NotFound />}></Route>
      </Routes>
    </div>
    </Router>
    </SearchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

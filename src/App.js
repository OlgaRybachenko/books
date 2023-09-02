import BooksList from './components/BooksList/BooksList';
import './App.css';
import React, { useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BookDetails from './components/BooksList/BookDetails/BookDetails';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './components/NotFount/NotFount';
import About from './components/About/About';
import { ThemeContext } from './context';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';


function App() {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));  //меняем тему
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <Router>
    <div className="app">
      <SearchBar setSearch={setSearch} />
      <ThemeToggler />
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
    </ThemeContext.Provider>
  );
}

export default App;

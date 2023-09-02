import BooksList from './components/BooksList/BooksList';
import './App.css';
import React, { useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BookDetails from './components/BooksList/BookDetails/BookDetails';


function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <div className="app">
      <SearchBar setSearch={setSearch} />
     <BooksList search={search} onSelectBook={setSelectedBook} />
     {selectedBook && <BookDetails bookId={selectedBook} />}
    </div>
  );
}

export default App;

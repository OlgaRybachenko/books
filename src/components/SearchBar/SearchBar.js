import { useState } from "react";
import './SearchBar.css'

function SearchBar({ setSearch }) {
  const [searchValue, setSearchValue] = useState('');     //по умолчанию строка запроса пустая
  const handleSearch = () => {
    setSearch(searchValue);
  }
  return (
    <div className='search'>
      <input type="text" placeholder="Search Books..."
      onChange={(event) => setSearchValue(event.target.value)} />
      <button  className='btn-searchbar' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
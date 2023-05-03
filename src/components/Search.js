import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';
import { useHistory } from 'react-router-dom'

function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data.meals || []);
      })
  }

  const history = useHistory();
  const handleClick = (id) => {
    // Navigate to meal view with the meal id
    history.push(`/meal/${id}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={handleSearch}><SearchSharp /></button>
      </div>
      <div className='searchResultsContainer'>
        <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Search;

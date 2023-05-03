import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';

function Search({ placeholder, data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const result = data.filter((meal) => meal.strMeal.toLowerCase().includes(value));
    setFilteredData(result);
  };

  const handleClick = (id) => {
    // Redirect to meal page with the meal id
    window.location.href = `/meal/${id}`;
  };

  const handleSearchIconClick = () => {
    const result = data.filter((meal) => meal.strMeal.toLowerCase().includes(searchTerm));
    setFilteredData(result);
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleSearch} />
        <div className="searchIcon" onClick={handleSearchIconClick}>
          <SearchSharp />
        </div>
      </div>
      <div className='searchResultsContainer'>
        <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Search;

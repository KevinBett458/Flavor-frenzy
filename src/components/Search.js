import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';
import ViewRecipe from './ViewRecipe';

function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data.meals || []);
      })
  }

  const handleViewRecipe = (Instructions) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Instructions}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMealId(data.meals[0]);
      });
  };
  

  const handleClick = (id) => {
    // Redirect to meal page with the meal id
    setSelectedMealId(id);
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
      {selectedMealId ? (
        <ViewRecipe mealId={selectedMealId} setSelectedMealId={setSelectedMealId} handleViewRecipe={handleViewRecipe}/>
      ) : (
      <div className='searchResultsContainer'>
        <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} />
      </div>
      )}
    </div>
  );
}

export default Search;

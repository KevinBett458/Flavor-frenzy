import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';
import ViewRecipe from './ViewRecipe';

function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data.meals || []);
      })
  }

  const handleViewRecipe = (idMeal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedMeal(data.meals[0]);
      })
      .catch ((error)=> console.error(error));
  };
  

  const handleClick = (idMeal) => {
    // Redirect to meal page with the meal id
    handleViewRecipe(idMeal)
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
        <button className='searchIcon' onClick={handleSearch}><SearchSharp /></button>
      </div>
      {selectedMeal ? (
        <ViewRecipe meal={selectedMeal} handleClose={()=> setSelectedMeal(null)} handleViewRecipe={handleViewRecipe}/>
      ) : (
      <div className='searchResultsContainer'>
        <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} />
      </div>
      )}
    </div>
  );
}

export default Search;

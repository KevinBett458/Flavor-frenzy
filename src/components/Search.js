import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';
import ViewRecipe from './ViewRecipe';
<<<<<<< HEAD
=======
import favorite from './Favorites';
import { toast } from 'react-toastify';

>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db

function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
<<<<<<< HEAD
=======
  const [favorites, setfavorites] = useState([]);
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db

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

<<<<<<< HEAD
=======
  const handleAddTofavorites = (event, meal) => {
    event.stopPropagation();
    setfavorites([...favorites, meal]);
    toast.success(`Added ${meal.strMeal} to favorites`);
  }

>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
<<<<<<< HEAD
        <button className='searchIcon' onClick={handleSearch}><SearchSharp /></button>
=======
        <button onClick={handleSearch}><SearchSharp /></button>
        <favorite favorites={favorites} />
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db
      </div>
      {selectedMeal ? (
        <ViewRecipe meal={selectedMeal} handleClose={()=> setSelectedMeal(null)} handleViewRecipe={handleViewRecipe}/>
      ) : (
<<<<<<< HEAD
      <div className='searchResultsContainer'>
        <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} />
      </div>
=======
        <div className='searchResultsContainer'>
          <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} handleAddTofavorites={handleAddTofavorites} />
        </div>
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db
      )}
    </div>
  );
}

export default Search;

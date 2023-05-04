import React, { useState } from 'react';
import './Search.css';
import SearchResults from './SearchResults';
import { SearchSharp } from '@mui/icons-material';
// import { Toast } from 'react-toastify/dist/components';
import ViewRecipe from './ViewRecipe';
import Favourite from './Favourites';
import { toast } from 'react-toastify';


function Search({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourites, setFavourites] = useState([]);

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

  const handleAddToFavourites = (event, meal) => {
    event.stopPropagation();
    setFavourites([...favourites, meal]);
    toast.success(`Added ${meal.strMeal} to favourites`);
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={handleSearch}><SearchSharp /></button>
        <Favourite favourites={favourites} />
      </div>
      {selectedMeal ? (
        <ViewRecipe meal={selectedMeal} handleClose={()=> setSelectedMeal(null)} handleViewRecipe={handleViewRecipe}/>
      ) : (
        <div className='searchResultsContainer'>
          <SearchResults filteredData={filteredData} handleClick={handleClick} searchTerm={searchTerm} handleAddToFavourites={handleAddToFavourites} />
        </div>
      )}
    </div>
  );
}

export default Search;

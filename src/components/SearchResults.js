import React from 'react';
import './Search.css';

function SearchResults({ filteredData, handleClick, searchTerm }) {
  const results = searchTerm
    ? filteredData.filter((meal) => meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase()))
    : [];

  return (
    <div className="dataResult">
      {results.map((value) => {
        return (
          <div key={value.idMeal} onClick={() => handleClick(value.idMeal)} className="mealContainer">
            <img src={value.strMealThumb} alt={value.strMeal}  className="mealThumb" />
            <div className="mealName">{value.strMeal}</div>
            <div className='mealCategory'>{value.strCategory}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;

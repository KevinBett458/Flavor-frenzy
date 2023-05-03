
import React from 'react';
import './Search.css';

function SearchResults({ filteredData, handleClick, searchTerm }) {
  const results = searchTerm
    ? filteredData.filter((meal) => meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase()))
    : [];


    const handleLike = (event, mealId)=> {
      //Handles the like button
      event.stopPropagation();
      console.log(`liked ${mealId}`);
    };

    const handleDislike = (event, mealId)=> {
      //Handles dislike button
      event.stopPropagation();
      console.log(`Disliked ${mealId}`)
    }


  return (
    <div className="dataResult">
      {results.map((value) => {
        return (
          <div key={value.idMeal} onClick={() => handleClick(value.idMeal)} className="mealContainer">
            <img src={value.strMealThumb} alt={value.strMeal}  className="mealThumb" />
            <div className="mealName">{value.strMeal}</div>
            <div>
              <button onClick={(event)=> handleLike(event, value.idMeal)}>Like</button>
              <button onClick={(event)=> handleDislike(event, value.idMeal)}>Dislike</button>
              <button onClick={()=> handleClick(value.idMeal)}>View Recipe</button>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
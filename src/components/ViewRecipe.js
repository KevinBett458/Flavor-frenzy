import React from 'react';
import './ViewRecipe.css';

function ViewRecipe({ meal, handleClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>Ingredients:</h3>
        <ul>
          {Object.keys(meal).filter(key => key.startsWith('strIngredient') && meal[key])
            .map((key) => (
              <li key={key}>{meal[key]}</li>
            ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default ViewRecipe;

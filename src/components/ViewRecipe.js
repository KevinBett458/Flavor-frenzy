import React from 'react';
import './RecipeForm.css'

function ViewRecipe({ meal, handleClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2 className="recipe-title">{meal.strMeal}</h2>
        <img className="recipe-image" src={meal.strMealThumb} alt={meal.strMeal} />
        <h3 className="ingredients-title">Ingredients:</h3>
        <ul className="ingredient-list">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .filter((i) => meal[`strIngredient${i}`])
            .map((i) => (
              <li key={i} className="ingredient-item">
                {meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}
              </li>
            ))}
        </ul>
        <h3 className="instructions-title">Instructions:</h3>
        <p className="instructions-text">{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default ViewRecipe;

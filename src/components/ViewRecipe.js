import React from 'react';


function ViewRecipe({ meal, handleClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .filter((i) => meal[`strIngredient${i}`])
            .map((i) => (
              <li key={i}>
                {meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}
              </li>
            ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default ViewRecipe;
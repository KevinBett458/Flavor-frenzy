import React from "react";
import { useEffect } from "react";

function ViewRecipe({ meal, handleClose }) {
    useEffect(() => {
        console.log("Meal prop:", meal);
      }, [meal]);
      
    return (
      <div className="view-recipe">
        <div className="view-recipe-header">
          <h2>{meal.strMeal}</h2>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className="view-recipe-body">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    );
  }
  
  export default ViewRecipe;
  
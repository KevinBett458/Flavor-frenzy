import React, { useState } from "react";
import './RecipeForm.css';

function RecipeForm({ addRecipe }) {
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ mealName, ingredients, instructions });
    setMealName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mealName">Meal Name:</label>
        <input
          type="text"
          id="mealName"
          name="mealName"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        /><br /><br />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        /><br /><br />

        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        /><br /><br />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;

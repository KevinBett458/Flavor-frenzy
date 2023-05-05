import React, { useState, useEffect } from "react";
import './RecipeForm.css';
import AddRecipe from "./AddRecipe";

function RecipeForm() {
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("")

  const addRecipe = {
    name: mealName,
    image: image,
    instructions: instructions,
    ingredients: ingredients
  };
  
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addRecipe)
    };
    fetch('http://localhost:8001/recipes', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setImage('');
    setMealName('');
    setIngredients('');
    setInstructions('');
  };
   

  return (
    <div>
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

        <label htmlFor="image">image:</label>
        <input
          type="url"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /><br /><br />

        {image && <img className='form-image' src={image} alt="Recipe" />}

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
      <div className="add-recipe">
      <AddRecipe />
      </div>
    </div>
  );
}

export default RecipeForm;

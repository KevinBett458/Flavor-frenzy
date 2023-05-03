import React, { useState } from 'react'
import Search from './Search'
import RecipeForm from './RecipeForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "../App.css"
import Navbar from './Navbar';


function Home() {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <div className="App">

            <Search placeholder={"Enter meal name"} />
            <RecipeForm addRecipe={addRecipe} />
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h2>{recipe.mealName}</h2>
                        <h3>Ingredients:</h3>
                        <p>{recipe.ingredients}</p>
                        <h3>Instructions:</h3>
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}


export default Home
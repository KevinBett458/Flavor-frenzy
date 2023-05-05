import React, { useState } from 'react'
import Search from './Search'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "../App.css"
// import Navbar from './Navbar';
import Footer from './Footer'


function Home() {
    const [recipes, setRecipes] = useState([]);
    const addRecipe = (recipe) => {
        setRecipes((prevRecipes) => [...prevRecipes,recipe]);
    };

    return (
        <div>
            <div>
            <Search placeholder={"Enter meal name"} data={recipes} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div className='footer-container'>
                <Footer addRecipe={addRecipe}/>
                     </div>
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
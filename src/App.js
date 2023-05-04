import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';
import RecipeForm from './components/RecipeForm';
import ViewRecipe from './components/ViewRecipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const removeRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home recipes={recipes} />} />

        <Route
          path="/favourites"
          element={<Favourites recipes={recipes} removeRecipe={removeRecipe} />}
        />

        <Route
          path="/add"
          element={<RecipeForm addRecipe={addRecipe} />}
        />

        <Route
          path="/view/:id"
          element={<ViewRecipe recipes={recipes} />}
        />
      </Routes>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import "./App.css"
import Navbar from './components/Navbar';
import { FavoritesContext } from './components/FavoritesContext';
import About from './components/About';
import RecipeForm from './components/RecipeForm';

function App() {
  const [favorites, setFavorites] = useState([]);
  

  const addTofavorites = (meal) => {
    setFavorites((prevFavorites) => [...prevFavorites, meal]);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favorites' element={<favorites favorites={favorites} />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipeform' element={<RecipeForm />} />
      </Routes>
    </>
  );
}

export default App;

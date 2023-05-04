import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import favorites from './components/Favorites';
import "./App.css"
import Navbar from './components/Navbar';
import { FavoritesContext } from './components/FavoritesContext';

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
      </Routes>
    </>
  );
}

export default App;

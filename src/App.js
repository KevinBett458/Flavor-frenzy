
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import favorites from './components/Favorites';
import "./App.css"
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Favourites from './components/Favourites'

=======
import { FavoritesContext } from './components/FavoritesContext';
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db

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

<<<<<<< HEAD
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/about' Component={About} />
=======
        <Route path='/favorites' element={<favorites favorites={favorites} />} />
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db
      </Routes>
    </>
  );
}

export default App;

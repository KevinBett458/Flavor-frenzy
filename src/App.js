import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import About from './components/About';
import RecipeForm from './components/RecipeForm';
import { FavoritesProvider } from './components/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipeform' element={<RecipeForm />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;

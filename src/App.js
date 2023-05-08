import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import About from './components/About';
import RecipeForm from './components/RecipeForm';
import { FavoritesProvider } from './components/FavoritesContext';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <FavoritesProvider>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/about' element={<About />} />
            <Route path='/recipeform' element={<RecipeForm />} />
          </Routes>
        </>
      )}
    </FavoritesProvider>
  );
}

export default App;

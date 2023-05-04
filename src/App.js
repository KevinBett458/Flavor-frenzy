import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './components/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;

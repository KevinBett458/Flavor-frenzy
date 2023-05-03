import React, { useState } from 'react'
import Search from './components/Search'
import RecipeForm from './components/RecipeForm'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/Favourites';
import Favourites from './components/Favourites';
import "./App.css"
import Navbar from './components/Navbar';


function App() {

  return (
    <>


      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/favourites' Component={<>Favourites</>} />
        <Route path='/about' Component={About} />
      </Routes>

    </>
  );
}


export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/Favourites';
import "./App.css"
import Navbar from './components/Navbar';
import Favourites from './components/Favourites'


function App() {

  return (
    <>


      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/favourites' element={<Favourites />} />
        <Route path='/about' Component={About} />
      </Routes>

    </>
  );
}


export default App


<<<<<<< HEAD
import React, { useState } from 'react';
import './Search.css';
import { ThumbUp } from '@mui/icons-material';
import { ThumbDown } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewRecipe from './ViewRecipe'

=======
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThumbUp } from "@mui/icons-material";
import { ThumbDown } from "@mui/icons-material";
import ViewRecipe from "./ViewRecipe";
import favorites from "./Favorites";
import FavoritesContext from "./FavoritesContext";
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db

function SearchResults({ filteredData, handleClick, searchTerm }) {
  const results = searchTerm
    ? filteredData.filter((meal) => meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase()))
    : [];
  const [selectedMeal, setSelectedMeal] = useState(null);
<<<<<<< HEAD

    const handleLike = (event, strMeal)=> {
      //Handles the like button
      event.stopPropagation();
      toast.success(`Liked ${strMeal}😀`);
    };
=======
  const [favorites, setfavorites] = useState([]);

  const {setFavourites}  = useContext(FavoritesContext)

  const addTofavorites = (meal) => {
    setfavorites((prevfavorites) => [...prevfavorites, meal]);
    setFavourites((prevfavorites) => [...prevfavorites, meal])
  };
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db

    const handleDislike = (event, strMeal)=> {
      //Handles dislike button
      event.stopPropagation();
      toast.error(`Disliked ${strMeal}😢`)
    }

<<<<<<< HEAD
    const handleViewRecipe = (idMeal)=> {
      setSelectedMeal(results.find((meal)=> meal.idMeal === idMeal));
    }

    return (
      <div className="dataResult">
        <ToastContainer />
        {selectedMeal ? (
          <ViewRecipe meal={selectedMeal} handleClose={() => setSelectedMeal(null)} />
        ) : (
          results.map((value) => {
            return (
              <div key={value.idMeal} onClick={() => handleClick(value.idMeal)} className="mealContainer">
                <img src={value.strMealThumb} alt={value.strMeal} className="mealThumb" />
                <div className="mealName">{value.strMeal}</div>
                <div>
                  <button className="like-btn" onClick={(event) => handleLike(event, value.strMeal)}>
                    <ThumbUp />
                  </button>
                  <button className="dislike-btn" onClick={(event) => handleDislike(event, value.strMeal)}>
                    <ThumbDown />
                  </button>
                </div>
                <div className="view-recipe-btn">
                  <button onClick={() => handleViewRecipe(value.idMeal)}>
                    View Recipe
                  </button>
                </div>
=======
    const handleDislike = (event, strMeal)=> {
      //Handles dislike button
      event.stopPropagation();
      toast.error(`Disliked ${strMeal}😢`)
    }

    const handleViewRecipe = (idMeal)=> {
      setSelectedMeal(results.find((meal)=> meal.idMeal === idMeal));
    }

  return (
    <div className="dataResult">
      <ToastContainer />
      {selectedMeal ? (
        <ViewRecipe
          meal={selectedMeal}
          handleClose={() => setSelectedMeal(null)}
          addToFavourites={addToFavourites}
        />
      ) : (
        results.map((value) => {
          return (
            <div
              key={value.idMeal}
              onClick={() => handleClick(value.idMeal)}
              className="mealContainer"
            >
              <img
                src={value.strMealThumb}
                alt={value.strMeal}
                className="mealThumb"
              />
              <div className="mealName">{value.strMeal}</div>
              <div>
                <button
                  className="like-btn"
                  onClick={(event) => handleLike(event, value.strMeal, value)}
                >
                  <ThumbUp />
                </button>
                <button
                  className="dislike-btn"
                  onClick={(event) => handleDislike(event, value.strMeal)}
                >
                  <ThumbDown />
                </button>
>>>>>>> 49631f2e768dc0c4c4471207626db13f6ae411db
              </div>
            );
          })
        )}
      </div>
    );
  }
  
  export default SearchResults;

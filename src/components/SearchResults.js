import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThumbUp } from "@mui/icons-material";
import { ThumbDown } from "@mui/icons-material";
import ViewRecipe from "./ViewRecipe";
import favorites from "./Favorites";
import FavoritesContext from "./FavoritesContext";

function SearchResults({ filteredData, handleClick, searchTerm }) {
  const results = searchTerm
    ? filteredData.filter((meal) =>
        meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : [];
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setfavorites] = useState([]);

  const {setFavourites}  = useContext(FavoritesContext)

  const addTofavorites = (meal) => {
    setfavorites((prevfavorites) => [...prevfavorites, meal]);
    setFavourites((prevfavorites) => [...prevfavorites, meal])
  };

  const handleLike = (event, strMeal, meal) => {
    event.stopPropagation();
    toast.success(`Liked ${strMeal}😀`);
    addToFavourites(meal);
  };

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
              </div>
              <div className="view-recipe-btn">
                <button onClick={() => handleViewRecipe(value.idMeal)}>
                  View Recipe
                </button>
              </div>
            </div>
          );
        })
      )}
      {favourites.length > 0 && <Favourites favourites={favourites} />}
    </div>
  );
}

export default SearchResults;

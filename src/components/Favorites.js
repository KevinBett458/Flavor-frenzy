import { useContext, useState } from 'react';
import { FavoritesContext } from './FavoritesContext';
import ViewRecipe from './ViewRecipe';
import './Favorite.css'

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  const handleViewRecipe = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const meal = data.meals[0];
      const ingredients = Object.keys(meal)
        .filter((key) => key.startsWith("strIngredient"))
        .map((key) => meal[key]);
      const instructions = meal.strInstructions ? meal.strInstructions.split("\r\n") : [];
      setSelectedMeal({
        ...meal,
        ingredients,
        instructions,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSelectedMeal(null);
  };

  return (
    <div className='favorites'>
      {favorites.length > 0 ? (
        <ul>
          <div className='favorites-header'>
          <p>Number of favorite meals: {favorites.length}</p>
          </div>
          {favorites.map((favorite) => (
            <li key={favorite.idMeal}>
              <img src={favorite.strMealThumb} alt={favorite.strMeal} />
              <div>
                <h3>{favorite.strMeal}</h3>
                <button style={{color: 'Red'}} onClick={() => handleRemoveFavorite(favorite.idMeal)}>
                  Remove
                </button>
                <button onClick={() => handleViewRecipe(favorite.idMeal)} disabled={loading}>
                  {loading ? 'Loading...' : 'View Recipe'}
                </button>
                </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='No-fav'>No favorites yet!</p>
      )}
      {selectedMeal && <ViewRecipe meal={selectedMeal} handleClose={handleClose} />}
    </div>
  );
}

export default Favorites;

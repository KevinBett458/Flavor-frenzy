import {useContext} from 'react';
import { FavoritesContext } from './FavoritesContext';

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addToFavorites = (meal) => {
    setFavorites([...favorites, meal]);
  };
   
  return (
    <div className='favorites'>
      <ul addToFavorites={addToFavorites}>
        {favorites ? favorites.map((favorite) => (
          <li key={favorite.idMeal}>{favorite.strMeal}</li>
        )) : <p>No favorites yet!</p>}
      </ul>
    </div>
  );
}

export default Favorites;

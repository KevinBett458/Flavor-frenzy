import {useContext} from 'react';
import { FavoritesContext } from './FavoritesContext';

function Favourites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addToFavorites = (meal) => {
    setFavorites([...favorites, meal]);
  };
  
  return (
    <div className='favorites'>
      <ul addToFavorites={addToFavorites}>
        {favorites.map((favorite) => (
          <li key={favorite.idMeal}>{favorite.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;

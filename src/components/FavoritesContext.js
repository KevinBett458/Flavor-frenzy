
import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider  = ({children}) => {
    const [favorites, setFavorites]  = useState([]);

    const removeFavorite = (id) => {
        const index = favorites.findIndex((favorite) => favorite.idMeal === id);
        if (index !== -1) {
          const newFavorites = [...favorites];
          newFavorites.splice(index, 1);
          setFavorites(newFavorites);
        }
      };

    return (
        <FavoritesContext.Provider value={{favorites, setFavorites, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;

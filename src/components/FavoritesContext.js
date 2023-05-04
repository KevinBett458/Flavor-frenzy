
import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider  = ({children}) => {
    const [Favorites, setFavorites]  = useState([]);

    return (
        <FavoritesContext.Provider value={{Favorites, setFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;

import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider  = ({children}) => {
    const [favourites, setFavourites]  = useState([]);

    return (
        <FavoritesContext.Provider value={{favourites, setFavourites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
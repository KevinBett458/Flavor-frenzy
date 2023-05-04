import React from "react";

export const FavoritesContext = React.createContext({
  favorites: [],
  addToFavorites: () => {},
});

export default FavoritesContext;
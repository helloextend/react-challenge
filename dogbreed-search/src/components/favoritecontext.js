import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (image) => {
    if (!favorites.includes(image)) {
      setFavorites([...favorites, image]);
    }
  };

  const removeFromFavorites = (image) => {
    const updatedFavorites = favorites.filter((favImage) => favImage !== image);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}

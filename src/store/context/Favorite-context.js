import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMeals((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMeals((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoritesContextProvider;

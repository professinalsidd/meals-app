import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

const MealsOverViewScreen = ({ route, navigation }) => {
  const cardId = route.params.cardId;

  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(cardId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cardId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cardId, navigation]);

  return <MealList items={displayMeals} />;
};

export default MealsOverViewScreen;

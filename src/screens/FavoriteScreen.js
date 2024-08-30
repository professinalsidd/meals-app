import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const isMealsFavorite = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (isMealsFavorite.length === 0) {
    return (
      <View style={styles.rootCtn}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={isMealsFavorite} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },
});

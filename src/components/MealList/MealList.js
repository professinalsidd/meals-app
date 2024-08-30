import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  function renderItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.mealsCtn, style]}>
      <Text style={[styles.mealDetails, textStyle]}>{duration}m</Text>
      <Text style={[styles.mealDetails, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.mealDetails, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  mealsCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  mealDetails: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginHorizontal: 6,
  },
});

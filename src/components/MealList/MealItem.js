import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../MealDetail";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressedHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealsItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnCtn : null)}
        onPress={pressedHandler}
      >
        <View style={styles.innerCtn}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealsItem: {
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 16,
    elevation: 4,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    shadowOpacity: 0.35,
  },
  innerCtn: {
    borderRadius: 8,
    overflow: "hidden",
  },
  btnCtn: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    margin: 8,
  },
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

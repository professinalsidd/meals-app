import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.rootCtn}>
      <View style={styles.subCtn}>
        <Pressable
          style={({ pressed }) => [
            styles.btnCtn,
            { backgroundColor: color },
            pressed ? styles.btnPressed : null,
          ]}
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
        >
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    height: 160,
  },
  subCtn: {
    flex: 1,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  btnCtn: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  btnPressed: {
    opacity: Platform.OS === "ios" ? 0.8 : null,
  },
  title: { color: "#000", fontSize: 16, fontWeight: "bold" },
});

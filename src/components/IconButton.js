import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, name, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.btnCtn : { marginRight: 10 })}
    >
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btnCtn: {
    marginRight: 10,
    opacity: 0.4,
  },
});

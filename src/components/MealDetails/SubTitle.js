import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.rootCtn}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  rootCtn: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 4,
  },
  text: {
    color: "#e2b497",
    fontSize: 16,
    fontWeight: "500",
  },
});

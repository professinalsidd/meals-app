import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.rootCtn}>
      <Text style={styles.text} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  rootCtn: {
    backgroundColor: "#e2b497",
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  text: {
    color: "#351401",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    padding: 5,
  },
});

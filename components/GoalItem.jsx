import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({title}) => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

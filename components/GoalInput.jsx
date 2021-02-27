import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
});

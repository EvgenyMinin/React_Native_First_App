import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonListContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="tomato"
              onPress={onCancel}
              style={styles.cancelButton}
            />
          </View>

          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },

  buttonListContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },

  button: {
    width: "40%",
    padding: 10,
  },
});

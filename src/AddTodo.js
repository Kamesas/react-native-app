import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import { ContextTodoList } from "./ContextAPI";
import { _setStoreData } from "./Utilits/asyncStorage";

const todoColors = {
  default: "#000"
};

const AddTodo = () => {
  const [value, setInputValue] = useState("");
  const { setTodoList } = useContext(ContextTodoList);

  const addTodoHandler = () => {
    if (!value.trim()) {
      Alert.alert("Input is empty !");
      return;
    }

    setTodoList(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: value.trim(),
        completed: false,
        important: false,
        color: todoColors.default
      }
    ]);

    setInputValue("");
  };

  return (
    <View style={styles.continer}>
      <View style={styles.formWrap}>
        <TextInput
          style={styles.input}
          value={value}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={text => setInputValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  continer: {
    padding: 10
  },
  formWrap: {
    flexDirection: "row",
    justifyContent: "center"
  },
  input: {
    width: "90%",
    borderColor: "#aaa",
    borderWidth: 1,
    paddingHorizontal: 5
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26
  }
});

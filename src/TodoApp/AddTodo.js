import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import { ContextTodoList } from "./ContextAPI";
import { _setStoreData } from "../Utilits/asyncStorage";
import { WHITE, GREEN } from "../common/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        important: false
      }
    ]);

    setInputValue("");
  };

  return (
    <View style={styles.continer}>
      <View style={styles.formWrap}>
        <TextInput
          placeholder="enter text here ..."
          onSubmitEditing={addTodoHandler}
          keyboardAppearance="dark"
          style={styles.input}
          value={value}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={text => setInputValue(text)}
        />
        <MaterialCommunityIcons
          name="plus-circle-outline"
          color={GREEN}
          size={40}
          onPress={addTodoHandler}
        />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  continer: {
    paddingVertical: 10
  },
  formWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: GREEN,
    flexGrow: 1,
    color: WHITE,
    paddingLeft: 5,
    fontSize: 20
  }
});

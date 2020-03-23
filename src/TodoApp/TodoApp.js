import React from "react";
import { StyleSheet, View } from "react-native";
import AddTodo from "./AddTodo";
import { ContextProvider } from "./ContextAPI";
import TodoList from "./TodoList/TodoList";
import { BLACK_200 } from "../common/colors";

const TodoApp = props => {
  console.log(props.route.name);

  return (
    <ContextProvider>
      <View style={styles.container}>
        <AddTodo />
        <TodoList />
      </View>
    </ContextProvider>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK_200,
    paddingRight: 5
  }
});

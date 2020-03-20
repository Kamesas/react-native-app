import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavBar } from "./src/NavBar";
import AddTodo from "./src/AddTodo";
import { ContextProvider } from "./src/ContextAPI";
import TodoList from "./src/TodoList/TodoList";

const App = () => {
  return (
    <ContextProvider>
      <View style={styles.container}>
        <NavBar title="Todo app" />
        <AddTodo />
        <TodoList />
      </View>
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});

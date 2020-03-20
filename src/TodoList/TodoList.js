import React, { useContext } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoList } = useContext(ContextTodoList);

  const renderItem = ({ item }) => <TodoListItem key={item.id} todo={item} />;

  return (
    <FlatList
      style={styles.container}
      data={todoList}
      renderItem={renderItem}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: "100%"
  }
});

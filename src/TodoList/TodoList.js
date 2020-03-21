import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoList } = useContext(ContextTodoList);
  if (!todoList || todoList.length < 0) return null;
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

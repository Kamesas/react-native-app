import React, { useContext, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoList } = useContext(ContextTodoList);
  const [selectedId, setSelectedId] = useState("");

  if (!todoList || todoList.length < 0) return null;

  const renderItem = ({ item }) => (
    <TodoListItem
      key={item.id}
      todo={item}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );
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
    height: "100%"
  }
});

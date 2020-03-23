import React, { useContext, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ContextTodoList } from "../ContextAPI";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todoList } = useContext(ContextTodoList);
  const [selectedId, setSelectedId] = useState("");

  if (!todoList || todoList.length < 0) return null;

  // const importantList = todoList.filter(item => item.important);

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
    // height: "100%"
  }
});

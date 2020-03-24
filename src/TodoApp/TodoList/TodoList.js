import React, { useState } from "react";
import { FlatList } from "react-native";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
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
  return <FlatList data={todoList} renderItem={renderItem} />;
};

export default TodoList;

import React, { useState } from "react";
import { FlatList, View } from "react-native";
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
  return (
    <View sltyle={{ flex: 1 }}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default TodoList;

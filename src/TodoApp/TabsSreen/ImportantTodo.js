import React, { useContext } from "react";
import { Text } from "react-native";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const ImportantTodo = () => {
  const { importantList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout>
      <Text>Important list !</Text>
      <TodoList todoList={importantList} />
    </TodoAppLayout>
  );
};

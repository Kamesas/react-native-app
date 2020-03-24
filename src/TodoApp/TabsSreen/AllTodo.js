import React, { useContext } from "react";
import { Text } from "react-native";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const AllTodo = () => {
  const { todoList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout>
      <Text>Important list !</Text>
      <TodoList todoList={todoList} />
    </TodoAppLayout>
  );
};

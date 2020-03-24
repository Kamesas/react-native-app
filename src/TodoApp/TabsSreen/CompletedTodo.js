import React, { useContext } from "react";
import { Text } from "react-native";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const CompletedTodo = () => {
  const { completedList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout>
      <Text>Completed list !</Text>
      <TodoList todoList={completedList} />
    </TodoAppLayout>
  );
};

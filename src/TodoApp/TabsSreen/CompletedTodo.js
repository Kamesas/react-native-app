import React, { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const CompletedTodo = () => {
  const { completedList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout title="Completed tasks">
      <TodoList todoList={completedList} />
    </TodoAppLayout>
  );
};

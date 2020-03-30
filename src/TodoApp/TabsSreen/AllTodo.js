import React, { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const AllTodo = () => {
  const { todoList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout title="All tasks">
      <TodoList todoList={todoList} />
    </TodoAppLayout>
  );
};

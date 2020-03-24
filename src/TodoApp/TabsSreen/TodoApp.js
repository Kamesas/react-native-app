import React, { useContext } from "react";
import AddTodo from "../AddTodo";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const TodoApp = () => {
  const { currentTodoList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout>
      <AddTodo />
      <TodoList todoList={currentTodoList} />
    </TodoAppLayout>
  );
};

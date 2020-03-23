import React, { useContext } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList/TodoList";
import { ContextTodoList } from "./ContextAPI";
import { TodoAppLayout } from "./TodoAppLayout";

const TodoApp = () => {
  const { currentTodoList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout>
      <AddTodo />
      <TodoList todoList={currentTodoList} />
    </TodoAppLayout>
  );
};

export default TodoApp;

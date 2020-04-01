import React, { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import { ContextTodoList } from "../ContextAPI";
import { TodoAppLayout } from "../TodoAppLayout";

export const ImportantTodo = () => {
  const { importantList } = useContext(ContextTodoList);

  return (
    <TodoAppLayout title="Marked tasks" lengthList={importantList.length}>
      <TodoList todoList={importantList} />
    </TodoAppLayout>
  );
};

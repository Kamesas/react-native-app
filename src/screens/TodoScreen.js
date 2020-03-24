import React from "react";
import { SafeAreaLayout } from "./SafeAreaLayout";
import { TodoAppIndex } from "../TodoApp/TodoAppIndex";

export const TodoScreen = () => {
  return (
    <SafeAreaLayout>
      <TodoAppIndex />
    </SafeAreaLayout>
  );
};

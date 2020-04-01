import React from "react";
import { SafeAreaLayout } from "./SafeAreaLayout";
import { TodoAppIndex } from "../TodoApp/TodoAppIndex";
import { ButtonDrawerNav } from "../common/ButtonDrawerNav";

export const TodoScreen = ({ navigation }) => {
  return (
    <SafeAreaLayout>
      <TodoAppIndex />
      <ButtonDrawerNav navigation={navigation} />
    </SafeAreaLayout>
  );
};

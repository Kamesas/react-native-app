import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { About } from "../screens/About";
import { MainScreen } from "../screens/MainScreen";
import { TodoApp } from "../screens/TodoApp";

const Stack = createStackNavigator();

export const AppNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="TodoApp" component={TodoApp} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

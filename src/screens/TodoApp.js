import React from "react";
import { SafeAreaLayout } from "./SafeAreaLayout";
import Todo from "../TodoApp/TodoApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImportantTodo } from "../TodoApp/ImportantTodo";
import { ContextProvider } from "../TodoApp/ContextAPI";
import { CompletedTodo } from "../TodoApp/CompletedTodo";
import { AllTodo } from "../TodoApp/AllTodo";

const Tab = createBottomTabNavigator();

export const TodoApp = () => {
  return (
    <ContextProvider>
      <SafeAreaLayout>
        <Tab.Navigator initialRoute="TodoApp">
          <Tab.Screen name="Todo" component={Todo} />
          <Tab.Screen name="ImportantTodo" component={ImportantTodo} />
          <Tab.Screen name="CompletedTodo" component={CompletedTodo} />
          <Tab.Screen name="AllTodo" component={AllTodo} />
        </Tab.Navigator>
      </SafeAreaLayout>
    </ContextProvider>
  );
};

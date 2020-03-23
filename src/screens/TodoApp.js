import React from "react";
import { SafeAreaLayout } from "./SafeAreaLayout";
import Todo from "../TodoApp/TodoApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text } from "react-native";

const Tab = createBottomTabNavigator();

export const TodoApp = () => {
  return (
    <SafeAreaLayout>
      <Tab.Navigator initialRoute="TodoApp">
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
    </SafeAreaLayout>
  );
};

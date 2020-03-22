import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "../screens/About";
import { MainScreen } from "../screens/MainScreen";
import { TodoApp } from "../screens/TodoApp";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="TodoApp" component={TodoApp} />
    </Drawer.Navigator>
  );
};

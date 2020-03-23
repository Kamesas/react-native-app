import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "../screens/About";
import { MainScreen } from "../screens/MainScreen";
import { TodoApp } from "../screens/TodoApp";
import { BLACK_200, WHITE } from "../common/colors";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerStyle={{
        backgroundColor: BLACK_200,
        width: 240
      }}
      drawerContentOptions={{
        activeTintColor: WHITE,
        inactiveTintColor: WHITE
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="TodoApp" component={TodoApp} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

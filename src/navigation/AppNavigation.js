import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "../screens/About";
import { MainScreen } from "../screens/MainScreen";
import { TodoScreen } from "../screens/TodoScreen";
import { BLACK_200, WHITE } from "../common/colors";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TodoApp"
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
      <Drawer.Screen name="TodoApp" component={TodoScreen} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

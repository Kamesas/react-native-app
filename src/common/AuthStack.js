import React from "react";
import { MainScreen } from "../screens/MainScreen";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

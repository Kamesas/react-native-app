import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { Login } from "../screens/Login";
import { TodoAppScreen } from "../screens/TodoAppScreen";
import { About } from "../screens/About";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Todo app"
          options={{
            headerTitle: "Todo app"
          }}
          component={TodoAppScreen}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Main"
          options={{
            headerTitle: "Main"
          }}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

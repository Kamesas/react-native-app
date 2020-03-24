import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "react-native-vector-icons";
import { ContextProvider } from "./ContextAPI";
import { tabNav } from "./model";
import { BLACK_100, BLACK_200, BLACK_700, WHITE, GREY } from "../common/colors";

const TodoBottomNavigation = createBottomTabNavigator();

export const TodoAppIndex = () => {
  return (
    <ContextProvider>
      <TodoBottomNavigation.Navigator
        initialRoute="TodoApp"
        tabBarOptions={{
          activeTintColor: WHITE,
          activeBackgroundColor: BLACK_100,
          inactiveTintColor: GREY,
          inactiveBackgroundColor: BLACK_200
        }}
      >
        {tabNav.map((item, i) => {
          return (
            <TodoBottomNavigation.Screen
              key={i}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarIcon: ({ focused }) => (
                  <Entypo
                    name={item.iconName}
                    color={focused ? WHITE : GREY}
                    size={22}
                  />
                )
              }}
            />
          );
        })}
      </TodoBottomNavigation.Navigator>
    </ContextProvider>
  );
};

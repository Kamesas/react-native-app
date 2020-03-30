import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "react-native-vector-icons";
import { ContextProvider } from "./ContextAPI";
import { tabNav } from "./model";
import { BLACK_100, BLACK_200, WHITE, GREY } from "../common/colors";
import { Keyboard } from "react-native";

const TodoBottomNavigation = createBottomTabNavigator();

export const TodoAppIndex = () => {
  const [bottomStyle, setBottomStyle] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setBottomStyle("-100%");
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setBottomStyle(0);
      }
    );

    return function cleanup() {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []); // eslint-disable-line

  return (
    <ContextProvider>
      <TodoBottomNavigation.Navigator
        initialRoute="TodoApp"
        tabBarOptions={{
          activeTintColor: WHITE,
          activeBackgroundColor: BLACK_100,
          inactiveTintColor: GREY,
          inactiveBackgroundColor: BLACK_200,
          keyboardHidesTabBar: true,
          style: { position: "absolute", bottom: bottomStyle }
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

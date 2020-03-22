import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "../screens/About";
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { SearchScreen } from "../screens/SearchScreen";
import { SearchStack } from "./SearchStack";

const Tab = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = "ios-home";
          } else if (route.name === "About") {
            iconName = "ios-contact";
          } else if (route.name === "Search") {
            iconName = "md-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Main" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

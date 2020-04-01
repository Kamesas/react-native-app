import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { About } from "../screens/About";
import { MainScreen } from "../screens/MainScreen";
import { TodoScreen } from "../screens/TodoScreen";
import { BLACK_200, WHITE } from "../common/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <FontAwesome
                name="code"
                size={14}
                color={WHITE}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: WHITE, textTransform: "uppercase" }}>
                Code
              </Text>
            </View>
          );
        }}
        onPress={async () =>
          await WebBrowser.openBrowserAsync(
            "https://github.com/Kamesas/react-native-app"
          )
        }
      />
    </DrawerContentScrollView>
  );
}

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
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          drawerLabel: () => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="home"
                  size={14}
                  color={WHITE}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: WHITE, textTransform: "uppercase" }}>
                  Main
                </Text>
              </View>
            );
          }
        }}
      />
      <Drawer.Screen
        name="TodoApp"
        component={TodoScreen}
        options={{
          drawerLabel: () => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="edit"
                  size={14}
                  color={WHITE}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: WHITE, textTransform: "uppercase" }}>
                  Todo
                </Text>
              </View>
            );
          }
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <FontAwesome
                  name="info-circle"
                  size={14}
                  color={WHITE}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    color: WHITE,
                    textTransform: "uppercase"
                  }}
                >
                  About
                </Text>
              </View>
            );
          }
        }}
      />
    </Drawer.Navigator>
  );
};

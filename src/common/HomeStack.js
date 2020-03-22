import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { TouchableOpacity, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
import { FeedScreen } from "../screens/FeedScreen";
import { ProductScreen } from "../screens/ProductScreen";
import { EditProductScreen } from "../screens/EditProductScreen";

const Stack = createStackNavigator();

export const HomeStack = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen
        name="Edit"
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Product")}>
              <Text>DONE</Text>
            </TouchableOpacity>
          )
        })}
        component={EditProductScreen}
      />
      <Stack.Screen
        name="Product"
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};

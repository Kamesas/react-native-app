import React from "react";
import { View, Text, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Button
        title="Todo app"
        onPress={() => navigation.navigate("Todo app")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

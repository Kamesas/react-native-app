import React from "react";
import { View, Text, Button } from "react-native";

export const Register = ({ navigation }) => {
  return (
    <View>
      <Text>register</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

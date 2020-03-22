import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../common/AuthProvider";

export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <Text>Login</Text>
      <Button title="Log in" onPress={() => login()} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

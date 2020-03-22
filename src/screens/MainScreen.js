import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../common/AuthProvider";

export const MainScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      {/* <Text>MainScreen</Text> */}
      <Button
        title="Todo app"
        onPress={() => navigation.navigate("Todo app")}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
      {/* <Button title="Logout" onPress={() => logout()} /> */}
    </View>
  );
};

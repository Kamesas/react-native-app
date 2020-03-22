import React from "react";
import { View, Text } from "react-native";

export const EditProductScreen = ({ route }) => {
  return (
    <View>
      <Text>Edit {route.params.name}</Text>
    </View>
  );
};

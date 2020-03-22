import React from "react";
import { View, Text, Button } from "react-native";

export const ProductScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this product"
        onPress={() =>
          navigation.navigate("Edit", {
            name: route.params.name
          })
        }
      />
    </View>
  );
};

import React from "react";
import { FlatList, Button } from "react-native";
import faker from "faker";

export const FeedScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(product, i) => product + i}
      renderItem={({ item }) => {
        return (
          <Button
            title={item}
            onPress={() => {
              navigation.navigate("Product", {
                name: item
              });
            }}
          />
        );
      }}
      data={Array.from(Array(50), () => faker.commerce.product())}
    />
  );
};

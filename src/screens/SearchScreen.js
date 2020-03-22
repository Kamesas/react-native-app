import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";
import faker from "faker";

export const SearchScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Button title="Search products" onPress={() => {}} />
      {show ? (
        <FlatList
          style={{ width: "100%" }}
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
          keyExtractor={(product, idx) => product + idx}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      ) : null}
    </View>
  );
};

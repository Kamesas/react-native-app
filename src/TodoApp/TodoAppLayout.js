import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BLACK_200, WHITE } from "../common/colors";

export const TodoAppLayout = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK_200,
    paddingRight: 5,
    height: "100%"
  },
  title: {
    fontSize: 24,
    color: WHITE,
    paddingTop: 10
  }
});

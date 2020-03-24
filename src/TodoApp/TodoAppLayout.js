import React from "react";
import { StyleSheet, View } from "react-native";
import { BLACK_200 } from "../common/colors";

export const TodoAppLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK_200,
    paddingRight: 5,
    height: "100%"
  }
});

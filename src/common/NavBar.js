import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BLACK_100, BLACK_200, WHITE } from "./colors";

export const NavBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.navBar}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: BLACK_100,
    backgroundColor: BLACK_200,
    borderWidth: 1,
    paddingBottom: 10
  },
  navBar: {
    textTransform: "uppercase",
    letterSpacing: 1,
    color: WHITE,
    fontSize: 26
  }
});

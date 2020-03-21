import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

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
    borderColor: "#aaa",
    backgroundColor: "#ccc",
    borderWidth: 1,
    paddingBottom: 10
  },
  navBar: {
    textTransform: "uppercase",
    letterSpacing: 1
  }
});

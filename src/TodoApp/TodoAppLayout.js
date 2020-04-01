import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BLACK_200, WHITE } from "../common/colors";

export const TodoAppLayout = ({ children, title, lengthList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.lengthList}>{lengthList}</Text>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 6
  },
  title: {
    fontSize: 24,
    color: WHITE,
    letterSpacing: 1,
    fontFamily: "RobotoBold"
  },
  lengthList: {
    fontSize: 18,
    color: WHITE,
    fontFamily: "LemonadaRegular"
  }
});

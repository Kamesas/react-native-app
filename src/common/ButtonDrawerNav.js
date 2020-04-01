import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { WHITE } from "./colors";

export const ButtonDrawerNav = ({ navigation }) => {
  if (!navigation) return null;
  return (
    <TouchableOpacity
      style={styles.drawerButtonWrap}
      onPress={() => navigation.toggleDrawer()}
    >
      <AntDesign name="menu-fold" size={30} color={WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerButtonWrap: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 7,
    left: 5,
    zIndex: 2,
    elevation: 3
  }
});

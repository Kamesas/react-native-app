import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaLayout } from "./SafeAreaLayout";
import { ButtonDrawerNav } from "../common/ButtonDrawerNav";

export const About = ({ navigation }) => {
  return (
    <SafeAreaLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
      </View>
      <ButtonDrawerNav navigation={navigation} />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 26
  }
});

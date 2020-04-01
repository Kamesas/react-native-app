import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaLayout } from "../screens/SafeAreaLayout";
import { ButtonDrawerNav } from "../common/ButtonDrawerNav";

export const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaLayout>
      <View style={styles.container}>
        <Text style={styles.title}>MainScreen</Text>
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

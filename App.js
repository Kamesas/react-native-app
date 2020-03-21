import React from "react";
import { StyleSheet, View } from "react-native";
import { TodoApp } from "./src/TodoApp/TodoApp";
import { NavBar } from "./src/common/NavBar";

const App = () => {
  return (
    <View>
      <View>
        <NavBar title="Todo app" />
      </View>
      <View style={styles.bodyContainer}>
        <TodoApp />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyContainer: {
    // paddingHorizontal: 15
  }
});

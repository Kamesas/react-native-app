import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TodoApp } from "./src/TodoApp/TodoApp";
import { NavBar } from "./src/common/NavBar";
import { AppLoading } from "expo";
import { loadFonts } from "./src/Utilits/loadFonts";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

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

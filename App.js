import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { loadFonts } from "./src/Utilits/loadFonts";
import { Routes } from "./src/common/Routes";

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

  return <Routes />;
};

export default App;

import React, { useState } from "react";
import { AppLoading } from "expo";
import { loadFonts } from "./src/Utilits/loadFonts";
import { Providers } from "./src/common/Providers";

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

  return <Providers />;
};

export default App;

import React from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

export const SafeAreaLayout = ({ children }) => {
  const insets = useSafeArea();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom
      }}
    >
      {children}
    </View>
  );
};

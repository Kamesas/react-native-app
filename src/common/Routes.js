import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";

export const Routes = () => {
  const [loading, setLoading] = useState(true);
  const { user, login } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(user => {
        if (user) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

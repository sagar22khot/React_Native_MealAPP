import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./navigation/MealNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    AntonReg: require("./assets/fonts/Anton-Regular.ttf"),
    BebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      ></AppLoading>
    );
  }

  return <MealNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "red",
  },
});

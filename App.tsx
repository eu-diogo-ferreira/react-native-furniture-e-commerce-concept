import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Home, ItemDetail } from "./src/screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <Home />
  );
};
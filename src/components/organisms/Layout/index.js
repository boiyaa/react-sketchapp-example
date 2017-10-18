import React from "react";
import { View } from "react-primitives";
import { colors, fonts } from "../../../designSystem";
import { Header } from "../Header";

export const Layout = ({ children, name = "Layout" }) => (
  <View name={name} style={{ position: "relative", paddingTop: 56 }}>
    {children}
    <Header />
  </View>
);

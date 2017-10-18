import React from "react";
import { View } from "react-primitives";
import { colors } from "../../../designSystem";

const styles = {
  view: {
    width: 22,
    height: 22,
    borderColor: colors.white,
    borderWidth: 2
  }
};

export const Menu = ({ children, style, name = "Menu" }) => (
  <View style={{ padding: 2 }}>
    <View name={name} style={{ ...styles.view, ...style }} />
  </View>
);

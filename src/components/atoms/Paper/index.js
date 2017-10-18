import React from "react";
import { View } from "react-primitives";
import { colors } from "../../../designSystem";

const styles = {
  view: {
    backgroundColor: colors.white
  }
};

export const Paper = ({ children, style, name = "Paper" }) => (
  <View name={name} style={{ ...styles.view, ...style }}>
    {children}
  </View>
);

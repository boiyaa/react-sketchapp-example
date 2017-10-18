import React from "react";
import { Text } from "react-primitives";
import { colors, typography } from "../../../designSystem";

export const Typography = ({
  children,
  name = "Typography",
  style,
  type = "body1",
  inverted = false
}) => (
  <Text
    name={name}
    style={{
      color: inverted ? colors.white : colors.black,
      ...typography[type],
      ...style
    }}
  >
    {children}
  </Text>
);

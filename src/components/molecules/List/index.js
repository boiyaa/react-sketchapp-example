import React from "react";
import { View } from "react-primitives";
import { colors, spacing } from "../../../designSystem";
import { Paper } from "../../atoms/Paper";
import { Typography } from "../../atoms/Typography";

export const List = ({ children, name = "List" }) => (
  <View name={name}>{children}</View>
);

const styles = {
  item: {
    height: 72,
    overflow: "hidden",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    ...spacing.edge
  },
  subtitle: {
    height: 48,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    ...spacing.edge
  }
};

export const ListItem = ({ children, name = "ListItem" }) => (
  <Paper name={name} style={styles.item}>
    {children}
  </Paper>
);

export const ListSubtitle = ({ children, name = "ListSubtitle", title }) => (
  <Paper name={name} style={styles.subtitle}>
    <Typography type="subheading">{title}</Typography>
  </Paper>
);

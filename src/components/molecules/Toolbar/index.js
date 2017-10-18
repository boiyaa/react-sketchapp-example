import React from "react";
import { View } from "react-primitives";
import { colors, spacing } from "../../../designSystem";
import { Menu } from "../../atoms/icons/Menu";
import { Paper } from "../../atoms/Paper";
import { Typography } from "../../atoms/Typography";

const styles = {
  root: {
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: colors.grey,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    ...spacing.edge
  },
  title: {
    marginLeft: 32
  }
};

export const Toolbar = ({ name = "Toolbar", title }) => (
  <Paper name={name} style={styles.root}>
    <Menu />
    <Typography type="headline" inverted style={styles.title}>
      {title}
    </Typography>
  </Paper>
);

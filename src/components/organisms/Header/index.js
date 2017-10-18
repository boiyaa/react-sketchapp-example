import React from "react";
import { Toolbar } from "../../molecules/Toolbar";

export const Header = ({ name = "Header" }) => (
  <Toolbar name={name} title="Example" />
);

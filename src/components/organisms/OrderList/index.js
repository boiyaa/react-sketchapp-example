import React from "react";
import { View } from "react-primitives";
import { Typography } from "../../atoms/Typography";
import { List, ListItem, ListSubtitle } from "../../molecules/List";

export const OrderList = ({ name = "OrderList", orders }) => (
  <View name={name}>
    <List>
      <ListSubtitle title="Orders" />
      {orders.map((order, i) => (
        <ListItem key={i}>
          <View>
            <Typography type="subheading">{order.title}</Typography>
            <Typography>{order.description}</Typography>
          </View>
        </ListItem>
      ))}
    </List>
  </View>
);

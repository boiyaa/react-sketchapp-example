import React from "react";
import { View } from "react-primitives";
import faker from "faker/locale/en";
import { Layout } from "../../organisms/Layout";
import { OrderList } from "../../organisms/OrderList";

const fakeOrders = [
  { title: faker.lorem.word(), description: faker.lorem.sentence() },
  { title: faker.lorem.word(), description: faker.lorem.sentence() },
  { title: faker.lorem.word(), description: faker.lorem.sentence() },
  { title: faker.lorem.word(), description: faker.lorem.sentence() }
];

export const Orders = () => (
  <Layout name="Orders">
    <OrderList orders={fakeOrders} />
  </Layout>
);

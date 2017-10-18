import React from "react";
import { render, Artboard as ArtboardOrig, View } from "react-sketchapp";
import faker from "faker/locale/en";
import { spacing, colors, fonts } from "../designSystem";
import { Menu } from "./atoms/icons/Menu";
import { Paper } from "./atoms/Paper";
import { Typography } from "./atoms/Typography";
import { List, ListItem, ListSubtitle } from "./molecules/List";
import { Toolbar } from "./molecules/Toolbar";
import { Header } from "./organisms/Header";
import { OrderList } from "./organisms/OrderList";
import { Orders } from "./templates/Orders";

// TODO: replace original Document when react-sketchapp 1.0.0 will release
const Document = ({ children }) => (
  <ArtboardOrig style={{ backgroundColor: "#f5f5f5" }}>{children}</ArtboardOrig>
);

// TODO: replace original Page when react-sketchapp 1.0.0 will release
const Page = ({ children, name }) => (
  <View name={name} style={{ padding: 32 }}>
    <Typography type="display4">{name}</Typography>
    <View name="{name}" style={{ flex: 1, flexDirection: "row" }}>
      {children}
    </View>
  </View>
);

// TODO: replace original Artboard when react-sketchapp 1.0.0 will release
const Artboard = ({ children, style, name }) => (
  <View name={name} style={{ padding: 32 }}>
    <Typography type="body2">{name}</Typography>
    <View
      style={{
        ...style,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2
      }}
    >
      {children}
    </View>
  </View>
);

const Story = ({ children, style, name }) => (
  <View name={name} style={{ padding: 32 }}>
    <Typography type="body2">{name}</Typography>
    <View style={style}>{children}</View>
  </View>
);

const Sketch = () => (
  <Document>
    <Page name="Atoms">
      <Story name="Icons">
        <Menu />
      </Story>
      <Story name="Paper" style={{ width: 256 }}>
        <Paper>
          <Typography>{faker.lorem.paragraph()}</Typography>
        </Paper>
      </Story>
      <Story name="Typography">
        <Typography type="display4">Display 4</Typography>
        <Typography type="display3">Display 3</Typography>
        <Typography type="display2">Display 2</Typography>
        <Typography type="display1">Display 1</Typography>
        <Typography type="headline">Headline</Typography>
        <Typography type="title">Title</Typography>
        <Typography type="subheading">Subheading</Typography>
        <Typography type="body2">Body 1</Typography>
        <Typography type="body1">Body 2</Typography>
        <Typography type="caption">Caption</Typography>
        <Typography type="button">BUTTON</Typography>
      </Story>
    </Page>

    <Page name="Molecules">
      <Story name="List" style={{ width: 375 }}>
        <List>
          <ListSubtitle title={faker.lorem.word()} />
          <ListItem>
            <Typography>{faker.lorem.word()}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{faker.lorem.word()}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{faker.lorem.word()}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{faker.lorem.word()}</Typography>
          </ListItem>
        </List>
      </Story>

      <Story name="Toolbar" style={{ width: 375 }}>
        <Toolbar title={faker.lorem.word()} />
      </Story>
    </Page>

    <Page name="Organisms">
      <Story
        name="Header"
        style={{ width: 375, height: 56, position: "relative" }}
      >
        <Header />
      </Story>

      <Story name="OrderList" style={{ width: 375 }}>
        <OrderList
          orders={[
            { title: faker.lorem.word(), description: faker.lorem.sentence() },
            { title: faker.lorem.word(), description: faker.lorem.sentence() },
            { title: faker.lorem.word(), description: faker.lorem.sentence() },
            { title: faker.lorem.word(), description: faker.lorem.sentence() }
          ]}
        />
      </Story>
    </Page>

    <Page name="Templates">
      <Artboard name="Orders" style={{ width: 375, height: 667 }}>
        <Orders />
      </Artboard>
    </Page>
  </Document>
);

export default () => {
  render(<Sketch />, context.document.currentPage());
};

import React, { Component } from "react";
import {
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";

import Video from "react-native-video";
import {
  Title,
  Footer,
  FooterTab,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import { createAppContainer } from "react-navigation";

//Packages
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

//import { type } from 'os';

export default class SubjectScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
          <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("FilterScreen")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Select Subject</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Science</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Biology</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Computer Science</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Maths</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Chemistry</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Urdu</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Physics</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>English</Text>
              <Right>
                <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

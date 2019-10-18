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
  Right
} from "native-base";

import { createAppContainer } from "react-navigation";

//Packages
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

//import { type } from 'os';

export default class FilterScreen extends Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: "white" }}
        //#6E6EFF" for blueish background
      >
        <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
          <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("HomeScreen")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Filter</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content style={{ alignSelf: "center", marginTop: hp("5%") }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SubjectScreen")}
          >
            <Card style={{ width: wp("85%") }}>
              <CardItem>
                <Text
                  style={{
                    fontSize: hp("2.5%"),
                    fontFamily: "LexendDeca-Regular",
                    color: "#838383"
                  }}
                >
                  Subjects
                </Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Card style={{ width: wp("85%") }}>
              <CardItem>
                <Text
                  style={{
                    fontSize: hp("2.5%"),
                    fontFamily: "LexendDeca-Regular",
                    color: "#838383"
                  }}
                >
                  Location
                </Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Card style={{ width: wp("85%") }}>
              <CardItem>
                <Text
                  style={{
                    fontSize: hp("2.5%"),
                    fontFamily: "LexendDeca-Regular",
                    color: "#838383"
                  }}
                >
                  Author
                </Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Card style={{ width: wp("85%") }}>
              <CardItem>
                <Text
                  style={{
                    fontSize: hp("2.5%"),
                    fontFamily: "LexendDeca-Regular",
                    color: "#838383"
                  }}
                >
                  Grade
                </Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>

          <View
            style={{
              width: wp("40%"),
              height: hp("5%"),
              alignSelf: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 30,
              marginTop: hp("5%")
            }}
          >
            <Text
              style={{
                fontFamily: "LexendDeca-Regular",
                fontSize: hp("2.5%"),
                color: "#898989"
              }}
            >
              Sort
            </Text>
          </View>

          <View
            style={{
              marginTop: hp("2%"),
              width: wp("90%"),
              height: hp("8%"),
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ textAlign: "center", fontSize: hp("1.8%") }}>
                Newly Listed
              </Text>
            </Button>

            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ textAlign: "center", fontSize: hp("1.7%") }}>
                Most Revelant
              </Text>
            </Button>

            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ textAlign: "center", fontSize: hp("1.7%") }}>
                Lowest Price
              </Text>
            </Button>
          </View>

          <View
            style={{
              width: wp("40%"),
              height: hp("5%"),
              alignSelf: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 30,
              marginTop: hp("5%")
            }}
          >
            <Text
              style={{
                fontFamily: "LexendDeca-Regular",
                fontSize: hp("2.5%"),
                color: "#898989"
              }}
            >
              View Style
            </Text>
          </View>

          <View
            style={{
              marginTop: hp("2%"),
              width: wp("90%"),
              height: hp("8%"),
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ textAlign: "center", fontSize: hp("2%") }}>
                Gallery View
              </Text>
            </Button>

            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ textAlign: "center", fontSize: hp("2%") }}>
                List View Ads
              </Text>
            </Button>

            <Button
              style={{
                width: wp("27%"),
                height: hp("6%"),
                backgroundColor: "#4E93FE"
              }}
              rounded
            >
              <Text style={{ fontSize: hp("2%"), textAlign: "center" }}>
                Mosiac View
              </Text>
            </Button>
          </View>
        </Content>

        <Footer style={{ height: hp("5%") }}>
          <FooterTab style={{ backgroundColor: "#4E93FE" }}>
            <Button>
              <Text
                style={{
                  fontFamily: "LexendDeca-Regular",
                  fontSize: hp("2.3%"),
                  color: "white"
                }}
              >
                Apply
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

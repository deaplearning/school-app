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

export default class HomeScreen extends Component {
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
              onPress={() => this.props.navigation.navigate("SelectScreen")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Books Corner</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("FilterScreen")}
            >
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DetailScreen")}
            >
              <Card
                style={{ width: "100%" }}
                //Card 1
              >
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://img.icons8.com/bubbles/100/000000/salary-male.png"
                      }}
                    />
                    <Body>
                      <Text>RS 1,500</Text>
                      <Text note>Used 9th Sindh Board class course</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={{
                        uri:
                          "https://apollo-singapore.akamaized.net/v1/files/0fip14l3n1zz2-PK/image;s=1080x1080"
                      }}
                      style={{ height: 200, width: "100%", flex: 1 }}
                    />
                    <Text>
                      Selling my used books course of class 9th sindh board. In
                      very nice condition.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="paper-plane" />
                      <Text>Posted 7 hours ago, in Garden East</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <Text>{"     "}</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Select")}
            >
              <Card
                style={{ width: "100%" }}
                //Card 2
              >
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
                      }}
                    />
                    <Body>
                      <Text>RS 2,500</Text>
                      <Text note>
                        Used Biology books Sindh Board class course
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={{
                        uri:
                          "https://apollo-singapore.akamaized.net/v1/files/lufse0rppbz42-PK/image;s=1080x1080"
                      }}
                      style={{ height: 200, width: "100%", flex: 1 }}
                    />

                    {/* <View style={{width:wp("85%"), height:hp("30%")}}>
                    <Video source={{ uri: "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4" }}   // Can be a URL or a localfile.
                      ref={(ref) => {
                        this.player = ref
                      }}                                      // Store reference
                      onBuffer={this.onBuffer}                // Callback when remote video is buffering
                      onEnd={this.onEnd}                      // Callback when playback finishes
                      onError={this.videoError}               // Callback when video cannot be loaded
                      style={{position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,}} />
                      </View> */}
                    <Text>
                      Want to sell my biology books for 9th sindh board. In very
                      nice condition.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="paper-plane" />
                      <Text>Posted 6 hours ago, in Malir</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <Text>{"     "}</Text>

            <TouchableOpacity>
              <Card
                style={{ width: "100%" }}
                //Card 3
              >
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://img.icons8.com/bubbles/100/000000/salary-male.png"
                      }}
                    />
                    <Body>
                      <Text>RS 1,800</Text>
                      <Text note>First Year Sindh Board class course</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={{
                        uri:
                          "https://apollo-singapore.akamaized.net/v1/files/93xwe5vk28xh-PK/image;s=1080x1080"
                      }}
                      style={{ height: 200, width: "100%", flex: 1 }}
                    />
                    <Text>
                      First Year Course sindh board. In very nice condition.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="paper-plane" />
                      <Text>Posted 6 hours ago, in Defence Phase 2</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <Text>{"     "}</Text>

            <TouchableOpacity>
              <Card
                style={{ width: "100%" }}
                //Card 4
              >
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://img.icons8.com/bubbles/100/000000/salary-male.png"
                      }}
                    />
                    <Body>
                      <Text>RS 2,500</Text>
                      <Text note>Whole Course Sindh Board class course</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={{
                        uri:
                          "https://apollo-singapore.akamaized.net/v1/files/x74aeirkzcoy1-PK/image;s=1080x1080"
                      }}
                      style={{ height: 200, width: "100%", flex: 1 }}
                    />
                    <Text>
                      Hi there, want to sell my whole course for 9th sindh
                      board. In very nice condition.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="paper-plane" />
                      <Text>Posted 6 hours ago, in Malir</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#4E93FE" }}>
            <Button vertical>
              <Icon name="navigate" />
              <Text style={{ color: "white", fontSize: hp("1.3%") }}>
                Explore
              </Text>
            </Button>

            <Button
              vertical
              onPress={() =>
                this.props.navigation.navigate("SellOfferingScreen")
              }
            >
              <Icon name="camera" />
              <Text style={{ color: "white", fontSize: hp("1.3%") }}>Sell</Text>
            </Button>
            <Button vertical>
              <Icon name="keypad" />
              <Text style={{ color: "white", fontSize: hp("1.3%") }}>
                My Ads
              </Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text style={{ color: "white", fontSize: hp("1.3%") }}>Me</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

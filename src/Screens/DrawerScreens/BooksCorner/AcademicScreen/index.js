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

import ActionButton from 'react-native-action-button';
import Iconn from 'react-native-vector-icons/Ionicons';

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


//Packages
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

//import { type } from 'os';

export default class AcademicScreen extends Component {
  static navigationOptions = {
    title: "Select Subject"
    //headerRight: <View />
  };

  render() {
    return (
      <Content style={{ backgroundColor: "white" }}>
        <View>
        <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
                    <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{width:wp("55%"),fontSize:hp("2.5")}}>
                            Select Subject To See Ads
                            </Title>
                    </Body>
                    <Right>

                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
          <ScrollView>
            <View
              style={{
                marginTop: hp("3%"),
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 20
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("HomeScreen")}
              >
                <Card style={{ width: wp("30%"), height: hp("15%") }}>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/ec.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("1.8%")
                      }}
                    >
                      Economics
                    </Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>

              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/bio.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Biology
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/chem.png")}
                    />
                    <Text>Chemistry</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 20
              }}
            >
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/comp.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Science
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/eng.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      English
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/maths.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Maths
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 20
              }}
            >
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/phy.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Physics
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/urdu.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Urdu
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "column"
                    }}
                  >
                    <Thumbnail
                      square
                      source={require("../../../../../assets/chem.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2%")
                      }}
                    >
                      Chemistry
                    </Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>

            <View
              style={{
                width: wp("90%"),
                height: hp("7%"),
                backgroundColor: "#4E93FE",
                alignSelf: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 30
              }}
            >
              <Text
                style={{
                  fontFamily: "LexendDeca-Regular",
                  fontSize: hp("2.5%"),
                  color: "white"
                }}
              >
                Featured Ads
              </Text>
            </View>


            <TouchableOpacity
              //ScrollCards starts from here
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

                    {/* <View style={{ width: wp("85%"), height: hp("30%") }}>
                      <Video source={{ uri: "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4" }}   // Can be a URL or a localfile.
                        ref={(ref) => {
                          this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onEnd={this.onEnd}                      // Callback when playback finishes
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }} />
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
   

        </View>

        <ActionButton style={{position:"absolute", marginTop: hp("90%") }} buttonColor="#4E93FE">
          <ActionButton.Item buttonColor='#9b59b6' title="Post An Ad" onPress={() => this.props.navigation.navigate("AdDetailScreen")}>
            <Icon name="md-create" style={{
              fontSize: 20,
              height: 22,
              color: 'white',
            }} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
            <Icon name="md-notifications-off" style={{
              fontSize: 20,
              height: 22,
              color: 'white',
            }} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
            <Icon name="md-done-all" style={{
              fontSize: 20,
              height: 22,
              color: 'white',
            }} />
          </ActionButton.Item>
        </ActionButton>

      </Content>


    );
  }
}

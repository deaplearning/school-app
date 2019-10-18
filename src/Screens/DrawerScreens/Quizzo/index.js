import React, { Component } from "react";
import {
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  StatusBar,
  FlatList,
  Platform,
  Dimensions
} from "react-native";

// PACKAGES
import Icon from "react-native-vector-icons/Ionicons";
import Iconed from "react-native-vector-icons/Entypo";
import { withNavigation } from "react-navigation";


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// FILES
import styles from "./style";
import { Colors } from "../../../Constant/color";

const { appColor } = Colors;
const { grayText } = Colors;
const { gray } = Colors;
const { appColor2 } = Colors;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
var { width, height } = Dimensions.get("window");

class Quizzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Option 1",
          image: "https://img.icons8.com/color/70/000000/cottage.png"
        },
        {
          id: 1,
          title: "Option 2",
          image: "https://img.icons8.com/color/70/000000/administrator-male.png"
        },
        {
          id: 2,
          title: "Option 3",
          image: "https://img.icons8.com/color/70/000000/filled-like.png"
        },
        {
          id: 3,
          title: "Option 4",
          image: "https://img.icons8.com/color/70/000000/facebook-like.png"
        },
        {
          id: 4,
          title: "Option 5",
          image: "https://img.icons8.com/color/70/000000/shutdown.png"
        },
        {
          id: 5,
          title: "Option 6",
          image: "https://img.icons8.com/color/70/000000/traffic-jam.png"
        },
        {
          id: 6,
          title: "Option 7",
          image: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png"
        },
        {
          id: 8,
          title: "Option 8",
          image: "https://img.icons8.com/flat_round/70/000000/cow.png"
        },
        {
          id: 9,
          title: "Option 9",
          image: "https://img.icons8.com/color/70/000000/coworking.png"
        },
        {
          id: 9,
          title: "Option 10",
          image: "https://img.icons8.com/nolan/70/000000/job.png"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={appColor2} barStyle="light-content" />

        {/* STICKY HEADER */}
        <View style={styles.stickyHeader}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate.goBack()}
          >
            <Icon
              name="ios-arrow-round-back"
              size={30}
              color="white"
              style={{ marginLeft: wp("2%") }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: "white",
              fontFamily: "LexendDeca-Regular",
              fontSize: hp("3%"),
              marginRight: wp("25%")
            }}
          >
            QUIZZO
          </Text>
          <TouchableOpacity style={styles.headerRight}>
            <Text
              style={{
                color: "white",
                fontFamily: "LexendDeca-Regular",
                fontSize: hp("2%")
              }}
            >
              CHALLENGES
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <View style={{ marginTop: hp("11%") }}>
          <ScrollView>
            <View style={styles.contentContainer}>
              <Image
                style={{
                  width: wp("20%"),
                  height: hp("25%"),
                  resizeMode: "contain",
                  marginLeft: wp("3%")
                }}
                source={require("../../../../res/img/monster.png")}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontFamily: "LexendDeca-Regular",
                    color: "white",
                    fontSize: hp("2.7%")
                  }}
                >
                  Muhammad Sarim
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.userData}>114</Text>
                  <Text style={styles.userData}>0 Posts | </Text>

                  <Text style={styles.userData}>1</Text>
                  <Text style={styles.userData}> Games</Text>
                </View>
              </View>
            </View>
            <View //Leaderboard card
              style={styles.rankCard}
            >
              <View style={styles.rankContentContainer}>
                <Text
                  style={{
                    marginLeft: "2%",
                    color: "white",
                    fontFamily: "LexendDeca-Regular",
                    fontSize: hp("2.5%")
                  }}
                >
                  Leaderboard rank
                </Text>
              </View>

              <View style={styles.rankCardStyle}>
                <View style={{ flexDirection: "row" }}>
                  <Iconed name="location" color="white" size={25}></Iconed>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.rankText}> Pakistan</Text>
                    <Text style={styles.rankText2}> 1851</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Iconed name="globe" color="white" size={25}></Iconed>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.rankText}> Global</Text>
                    <Text style={styles.rankText2}> 1063587</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.playCardContainer}>
              <View
                //play with friend card
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#00000021",
                  height: hp("4%"),
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    marginLeft: "2%",
                    fontSize: hp("2.5%"),
                    color: grayText
                  }}
                >
                  Play with a friend
                </Text>
              </View>

              <View
                style={{
                  height: 80,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  lineHeight: 80
                }}
              >
                <Image
                  style={{
                    width: wp("20%"),
                    height: hp("8%"),
                    resizeMode: "contain"
                  }}
                  source={require("../../../../res/img/add.png")}
                />

                <View
                  style={{
                    flexDirection: "column",
                    width: 200,
                    alignSelf: "center"
                  }}
                >
                  <Text
                    style={{
                      color: grayText,
                      fontFamily: "LexendDeca-Regular",
                      fontSize: hp("2.2%")
                    }}
                  >
                    Challenge your Friends to a Quizzo game
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: gray,
                        fontFamily: "LexendDeca-Regular",
                        fontSize: hp("2.2%"),
                        marginLeft: wp("15%"),
                        marginTop: hp("2%")
                      }}
                    >
                      ADD A FRIEND
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              //topic to play card
              style={{
                backgroundColor: "white",
                width: "95%",
                alignSelf: "center",
                marginTop: hp("3%"),

                shadowColor: "#00000021",
                shadowOffset: {
                  width: 0,
                  height: 6
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12
              }}
            >
              <View
                style={{
                  borderTopWidth: 2,
                  borderBottomWidth: 2,
                  borderColor: "#00000021",
                  height: hp("5%"),
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    marginLeft: "2%",
                    fontFamily: "LexendDeca-Regular",
                    fontSize: hp("2.5%"),
                    color: grayText
                  }}
                >
                  Select topic to play
                </Text>
              </View>
              <FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.data}
                horizontal={false}
                numColumns={3}
                keyExtractor={item => {
                  return item.id;
                }}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity style={styles.card}>
                      <View style={{ justifyContent: "center" }}>
                        <Image
                          style={styles.cardImage}
                          source={{ uri: item.image }}
                        />
                        <View style={styles.cardHeader}>
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            <Text style={styles.title}>{item.title}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>

        {/* FOOTER */}
        <View style={styles.mainviewStyle}>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.bottomButtons}>
              <Text style={styles.footerText}>PLAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default withNavigation(Quizzo);

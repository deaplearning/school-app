//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

// PACKAGES
import { Icon } from "react-native-elements";
import Iconedd from "react-native-vector-icons/Feather";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Colors } from "../../Constant/color";

const { appColor, grayText, gray, appColor2, appFont } = Colors;

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage = "https://www.bootdey.com/img/Content/avatar/avatar6.png";
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: "camera",
        navOptionName: "Parent Connect",
        screenToNavigate: "ParentConnect"
      },
      {
        navOptionThumb: "image",
        navOptionName: "Notification",
        screenToNavigate: "Notification"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Contact Us",
        screenToNavigate: "ContactUs"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Quizzo",
        screenToNavigate: "Quizzo"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Subcribe Now",
        screenToNavigate: "SubcribeNow"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Profile",
        screenToNavigate: "Profile"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Share the App",
        screenToNavigate: "ShareApp"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Quiz Result",
        screenToNavigate: "QuizResult"
      },
      {
        navOptionThumb: "build",
        navOptionName: "Buy & Sell",
        screenToNavigate: "SelectScreen"
      }
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <ScrollView>
          {/*Top Large Image */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width - 100
            }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Image
                source={{ uri: this.proileImage }}
                style={styles.sideMenuProfileIcon}
              />

              <View
                style={{
                  flexDirection: "column",
                  marginTop: hp("5%"),
                  width: wp("20%"),
                  height: hp("7%")
                }}
              >
                <View style={{ marginLeft: wp("3%") }}>
                  <Text
                    style={{
                      fontSize: hp("2.2%"),
                      fontFamily: "Nunito-ExtraBold",
                      color: "black"
                    }}
                  >
                    Naveen
                  </Text>
                  <Text
                    style={{
                      fontSize: hp("2%"),
                      fontFamily: appFont,
                      color: "black"
                    }}
                  >
                    10
                  </Text>
                </View>
              </View>
            </View>

            <Iconedd
              name="arrow-right-circle"
              color={appColor}
              size={hp("6%")}
              style={{ marginTop: hp("7%") }}
            />
          </TouchableOpacity>
          {/*Divider between Top Image and Sidebar Option*/}

          {/*Setting up Navigation Options from option array using loop*/}

          <View style={{ width: "100%" }}>
            {this.items.map((item, key) => (
              <View
                //control for whole navigation drawer container
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: hp("7%"),

                  backgroundColor:
                    global.currentScreenIndex === key ? "#e0dbdb" : "white"
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: hp("5%"),
                    width: "100%",
                    borderBottomColor: grayText,
                    borderBottomWidth: 0.5,

                    backgroundColor:
                      global.currentScreenIndex === key ? "#e0dbdb" : "white"
                  }}
                  onPress={() => {
                    global.currentScreenIndex = key;
                    this.props.navigation.navigate(item.screenToNavigate);
                  }}
                >
                  <View style={{ marginRight: 10, marginLeft: 20 }}>
                    <Icon
                      //Control all icons for styling
                      name={item.navOptionThumb}
                      size={hp("3%")}
                      color={appColor}
                    />
                  </View>

                  <Text
                    //control all text of navigation drawer
                    style={{
                      fontSize: hp("2%"),
                      width: wp("40%"),
                      height: hp("3%"),
                      fontFamily: "LexendDeca-Regular",
                      color:
                        global.currentScreenIndex === key
                          ? "#6363FF"
                          : "#898989"
                    }}
                  >
                    {item.navOptionName}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: wp("15%"),
    height: hp("15%"),
    marginTop: hp("2%"),
    borderRadius: 150 / 2
  }
});

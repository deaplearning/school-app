import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";

// FILES
import styles from "./style";
import { Colors } from "../../../Constant/color";
import ParallexHeader from "../../../Components/parallexHeader";

// CONSTANT
const { appColor, gray, appFont } = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 27,
        shadowColor: "#00000021",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 3
      }}
      onPress={() => props.navigation.goBack()}
    >
      <Icon name="ios-arrow-round-back" size={hp("4%")} color={appColor} />
    </TouchableOpacity>
  );
};

export default class Quizzo extends Component {
  _renderScrollViewContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../res/img/rocket.png")}
          />
        </View>

        <View style={styles.connectContainer}>
          <Text style={styles.notificationTitle}>Notification Center</Text>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "center" }}
        >
          <Image
            style={styles.bellIcon}
            source={require("../../../../res/img/bell.png")}
            resizeMode="contain"
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: 30
            }}
          >
            <Text style={{ fontFamily: appFont, fontSize: hp("2%") }}>
              You have no new notifications right now.
            </Text>

            <Text style={{ fontFamily: appFont, fontSize: hp("2%") }}>
              Come back later
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
        <ParallexHeader
          _renderScrollViewContent={this._renderScrollViewContent}
          leftIcon={leftIcon(this.props)}
          defaultHeaderColor={styles.defaultHeaderColor}
          titleStyle={styles.titleStyle}
        />
    );
  }
}

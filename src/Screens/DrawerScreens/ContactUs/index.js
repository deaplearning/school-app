import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  Platform
} from "react-native";

// PACKAGES
import { Card, ListItems, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import TabIcon from "react-native-vector-icons/SimpleLineIcons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";
import Toast, { DURATION } from "react-native-easy-toast";

// FILES
import styles from "./style";
import ReusableCard from "../../../Components/Card";
import ParallexHeader from "../../../Components/parallexHeader";
import { Colors } from "../../../Constant/color";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : 30; //StatusBar.currentHeight;

const { appColor } = Colors;

export default class Quizzo extends Component {
  _renderScrollViewContent = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: StatusBar.currentHeight,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: StatusBar.currentHeight,
            alignItems: "center",
            zIndex: 1000,
            elevation: 1000
          }}
        >
          <TouchableOpacity
            style={{
              width: wp("12%"),
              height: hp("6%"),
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              shadowColor: "#00000021",
              shadowOffset: {
                width: 0,
                height: 6
              },
              marginLeft: wp("3%"),
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 3
            }}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Icon
              name="ios-arrow-round-back"
              size={hp("4%")}
              color={appColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: wp("12%"),
              height: hp("6%"),
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              shadowColor: "#00000021",
              shadowOffset: {
                width: 0,
                height: 6
              },
              marginRight: wp("3%"),
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 3
            }}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <TabIcon name="screen-tablet" size={hp("4%")} color={appColor} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.contactText}>Contact Us</Text>
        </View>

        <View style={{ margin: "3%" }}>
          <ReusableCard
            cardImage="../../../../res/img/rocket.png"
            subTitle="Introuction to Numbers"
            cardTitle="Counting"
            cardStyle={styles.customCard}
            cardTextStyle={styles.customCardText}
          />
        </View>

        <View style={{ margin: "3%" }}>
          <ReusableCard
            cardImage="../../../../res/img/rocket.png"
            subTitle="Introuction to Numbers"
            cardTitle="Counting"
            cardStyle={styles.customCard}
            cardTextStyle={styles.customCardText}
          />
        </View>

        <Text style={styles.feedbackContainer}>
          For any feedback, enter here
        </Text>

        <Input placeholder="Enter here" style={styles.feedback} />

        <TouchableOpacity
          style={styles.feedbackBtn}
          onPress={() => {
            this.refs.toast.show("Thanks for your feedback!", 500);
          }}
        >
          <Text style={styles.feedbackBtnTxt}>Send</Text>
        </TouchableOpacity>

        <Toast
          ref="toast"
          position="bottom"
          positionValue={110}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "white" }}
        />
      </View>
    );
  };

  render() {
    return <View style={{ flex: 1 }}>{this._renderScrollViewContent()}</View>;
  }
}

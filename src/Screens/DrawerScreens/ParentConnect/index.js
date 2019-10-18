import React, { Component } from "react";

import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from "react-native";

// FILES
import styles from "./style";
import ParallexHeader from "../../../Components/parallexHeader";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../Constant/color";

// CONSTANT
const { appColor, gray } = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        borderRadius: 27,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
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

export default class ParentConnect extends Component {
  _renderScrollViewContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../res/img/family.png")}
          />
        </View>

        <View style={styles.connectContainer}>
          <Text style={styles.connectTextOne}>Parent Connect</Text>

          <Text style={styles.connectTextTwo}>
            {" "}
            Track your child's progress
          </Text>
        </View>
        <View style={styles.parentConatiner}>
          <Text style={styles.parentText}>Download the Parent App</Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 50, padding: 10 }}>
          <View style={styles.childContainer}>
            <Text style={styles.childText}>
              {"\u2B24"} Enter the child's registered number
            </Text>
          </View>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.number}> +92-3412617667</Text>
        </View>

        <View style={{ flexDirection: "row", marginRight: 50, padding: 10 }}>
          <View style={styles.childContainer}>
            <Text style={styles.childText}>
              {"\u2B24"} Enter the Parent Code
            </Text>
          </View>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.number}> chflzw</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.parentButton}>
            <Text
              style={{
                fontFamily: "LexendDeca-Regular",
                fontSize: hp("2.2%"),
                color: "white"
              }}
            >
              Go To Parent App
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.touch}>
          <Text style={styles.touchText}>Share Parent App</Text>
        </TouchableOpacity>
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

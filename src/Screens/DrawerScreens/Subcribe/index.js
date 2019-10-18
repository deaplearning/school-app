import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";

// FILES
import styles from "./style";
import { Colors } from "../../../Constant/color";
import ParallexHeader from "../../../Components/parallexHeader";

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

export default class SubcribeNow extends Component {
  _renderScrollViewContent = () => {
    const {
      container,
      subsContainer,
      subsText,
      imageCancel,
      onlineText,
      infoText,
      callButton,
      callText,
      backgroundImage,
      buttonContainer
    } = styles;

    return (
      <View style={container}>
        <View style={subsContainer}>
          <Text style={[subsText , {fontFamily: appFont}]}>Subscription</Text>
        </View>

        <View>
          <Image
            style={imageCancel}
            source={require("../../../../res/img/noise.png")}
          />

          <View
            style={[infoText, { width: wp("70%"), textAlign: "center" }]}
            alignItems="center"
          >
            <Text style={onlineText}>
              Online subscription for this grade is unavailable at the moment.
            </Text>

            <Text style={{fontFamily: appFont}}>Please call us for more information</Text>
          </View>
        </View>

        <View style={buttonContainer}>
          <TouchableOpacity style={callButton}>
            <Text style={[callText]}>Call Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallexHeader
          _renderScrollViewContent={this._renderScrollViewContent}
          leftIcon={leftIcon(this.props)}
          defaultHeaderColor={styles.defaultHeaderColor}
          titleStyle={styles.titleStyle}
        />
      </View>
    );
  }
}

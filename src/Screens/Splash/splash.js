import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Banner from "../../../assets/banners/splash.png"
import Logo from "../../../assets/banners/logo.png"
export default class splash extends React.Component {
  render() {
    return (
        <ImageBackground source={Banner} style={Styles.container}>
        <Image
          style={{ width: wp("60%"), height: hp("100%") }}
          source={Logo}
          resizeMode={"center"}
        />
      </ImageBackground>
    );
  }
}

Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

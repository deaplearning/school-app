import React from "react";
import { View, StyleSheet, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class splash extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={{ width: wp("80%"), height: hp("100%") }}
          source={require("../../../res/img/deapLearning.png")}
          resizeMode={"center"}
        />
      </View>
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

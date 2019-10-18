import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";

// PACKAGES
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";

// FILES
import { Colors } from "../../Constant/color";

const { width, height } = Dimensions.get("window");
const { appColor } = Colors;

export default class ReusableCard extends Component {
  static defaultProps = {
    cardTitle: "Default Title",
    subTitle: "Default SubTitle",
    cardImage: "",
    cardStyle: null,
    cardTextStyle: null
  };

  render() {
    const {
      cardImage,
      cardTitle,
      subTitle,
      cardStyle,
      cardTextStyle
    } = this.props;

    return (
      <View>
        <View style={{ margin: "3%" }}>
          <Text
            style={{
              fontFamily: "LexendDeca-Regular",
              fontSize: hp("1.5%")
            }}
          >
            Recommended Learning
          </Text>
        </View>
        <View
          style={[
            {
              width: wp("85%"),
              alignSelf: "center",
              height: hp("12%"),
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              shadowColor: "#00000021",

              shadowOffset: {
                width: 0,
                height: 6
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 3
            },
            cardStyle
          ]}
        >
          <Image
            style={{ height: hp("11%"), width: wp("12%"), alignSelf: "center" }}
            source={{ uri: cardImage }}
            resizeMode={"contain"}
          />
          <View style={{ flexDirection: "column", marginRight: wp("12%") }}>
            <Text style={cardTextStyle}>{cardTitle}</Text>

            <Text style={cardTextStyle}>{subTitle}</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => alert(subTitle)}
          >
            <Icon name="arrowright" color={appColor} size={hp("3%")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

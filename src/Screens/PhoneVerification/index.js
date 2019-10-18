import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

// PACKAGES
import CodeInput from "react-native-confirmation-code-input";
import EditIcon from "react-native-vector-icons/FontAwesome";

// FILES
import styles from "./style";
import { Colors } from "../../Constant/color";
import { widthPercentageToDP } from "react-native-responsive-screen";

// CONSTANT
const { appColor, appFont } = Colors;

export default class PhoneVerification extends Component {
  state = {
    text1: "",
    text2: "",
    text3: "",
    text4: ""
  };

  render() {
    const { container, btnStyle } = styles;

    return (
      <View style={container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <Text style={{ color: "gray", fontFamily: appFont }}>
            We have send you OTP code
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text style={{ color: "black", fontFamily: appFont }}>
              +92 372142662
            </Text>

            <TouchableOpacity
              onPress={() => alert("Edit Kar Bharwe")}
              style={{ marginLeft: widthPercentageToDP("5%") }}
            >
              <EditIcon name="edit" size={22} color={appColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: "-10%" }}>
          <Text style={{ color: "gray", fontFamily: appFont }}>
            Didn't Reveive SMS?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => alert("Resending Code")}
            style={btnStyle}
          >
            <Text style={{ color: appColor, fontFamily: "Nunito-ExtraBold" }}>Resend</Text>
          </TouchableOpacity>
        </View>


        <View style={{justifyContent: "center", alignSelf:"center", alignItems:"center"}}>
        <CodeInput
          ref="codeInputRef1"
          className={"border-b"}
          space={5}
          size={30}
          inputPosition="center"
          onFulfill={code => this.props.navigation.navigate("Dashboard")}
          activeColor="#40A6D1"
          inactiveColor={appColor}
          cellBorderWidth={2}
          size={50}
        />
        </View>
      </View>
    );
  }
}

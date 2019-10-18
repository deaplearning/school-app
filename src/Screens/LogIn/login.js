import React, { Component } from "react";
import { Input } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import GoogleLogin from "./GoogleLogin"
// PACKAGES
import { withNavigation } from "react-navigation";
import Reinput from "reinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import PhoneNumberPicker from "react-native-country-code-telephone-input";

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from "react-native-indicators";

// FILES
import styles from "./style";
import { Colors } from "../../Constant/color";

const { appColor, appFont } = Colors;

class Login extends Component {


  state = { defaultLoading: false, number: "", pickerValue: "" };

  componentWillUnmount() {
    this.setState({ defaultLoading: false, number: "" });
  }

  PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
    this.setState({
      countryName: country.name,
      callingCode: callingCode,
      phoneNo: phoneNumber
    });
  }

  updateValue = pickerValue => {
    this.setState({ pickerValue });
  };

  loginUser = () => {
    const { number, pickerValue } = this.state;

    this.setState({ defaultLoading: true });
    setTimeout(() => {
      this.props.navigation.navigate("Dashboard");
    }, 1000);
  };

  render() {
    const { defaultLoading, number, pickerValue } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />

        <View style={styles.headContainer}>
          <Text style={styles.headText}>Login</Text>

          <Text style={styles.headDownText}>Great to see you again!</Text>
        </View>

        <View style={styles.InputsContainer}>
          <View style={styles.pickerCon}>
            <PhoneNumberPicker
              countryHint={{ name: "Pakistan", cca2: "PK", callingCode: "92" }}
              onChange={this.PhoneNumberPickerChanged.bind(this)}
            />

            <View
              style={{
                width: wp("85%"),
                flexDirection: "row",
                justifyContent: "space-between",
                height: hp("9%")
              }}
            ></View>
          </View>
        </View>
        <View style={styles.otpContainer}>
          <Text style={styles.otpText}>
            we will send you a 4 digit OTP to verify
          </Text>
        </View>
        <View style={styles.buttonAndIndicator}>
          {defaultLoading ? (
            <SkypeIndicator color="#00BCD4" size={20} />
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                color="#FE4141"
                style={styles.buttonRegister}
                title="Register"
                onPress={() => {
                  this.loginUser();
                }}
              >
                <Text style={styles.registerText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <GoogleLogin/>

        <View style={styles.alreadyConatiner}>
          <Text style={styles.newAccountText}>Create a new account</Text>
          <TouchableOpacity
            style={styles.registerOpacity}
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.registerTextTwo}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Login);

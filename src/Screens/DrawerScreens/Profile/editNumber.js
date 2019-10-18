import React from "react";

import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  Picker
} from "react-native";

const { appColor } = Colors;

// PACKAGES
// import Modal from 'react-native-modal';
import BottomSheet from "reanimated-bottom-sheet";

import PhoneNumberPicker from "react-native-country-code-telephone-input";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Reinput from "reinput";

// FILES
import styles from "./editNumberStyle";
import Dashboard from "../../Dashboard";
import { Colors } from "../../../Constant/color";

export default class EditNumber extends React.Component {
  PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
    this.setState({
      countryName: country.name,
      callingCode: callingCode,
      phoneNo: phoneNumber
    });
  }

  state = {
    data: [
      {
        id: 1,
        title: "WhatsApp",
        image:
          "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-512.png"
      },
      {
        id: 1,
        title: "Gmail",
        image:
          "https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"
      },
      {
        id: 2,
        title: "Bluetooth",
        image: "http://aux.iconspalace.com/uploads/20599860882095427509.png"
      },
      {
        id: 3,
        title: "Copy",
        image: "https://img.icons8.com/material-outlined/32/000000/copy.png"
      },
      {
        id: 4,
        title: "Massenger",
        image: "https://img.icons8.com/color/48/000000/facebook-messenger.png"
      },
      {
        id: 5,
        title: "SnapChat",
        image: "https://img.icons8.com/plasticine/100/000000/snapchat.png"
      },
      {
        id: 6,
        title: "Copy to...",
        image: "https://img.icons8.com/color/48/000000/folder-invoices.png"
      },
      {
        id: 7,
        title: "Save to Drive",
        image: "https://img.icons8.com/color/48/000000/google-drive.png"
      }
    ]
  };

  updateValue = value => {
    this.setState({ value: value });
  };

  renderInner = () => (
    <View
      style={{
        flexDirection: "column",
        width: wp("100%"),
        height: hp("60%"),
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontFamily: "LexendDeca-Regular",
          color: "black",
          fontSize: hp("4%"),
          marginTop: hp("3%")
        }}
      >
        {" "}
        Change Number
      </Text>

      <Text
        style={{
          fontFamily: "LexendDeca-Regular",
          color: "black",
          fontSize: hp("2%"),
          marginTop: hp("3%")
        }}
      >
        {" "}
        Please enter your phone number
      </Text>

      <View
        style={{ width: wp("60%"), height: hp("20%"), flexDirection: "column" }}
      >
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={styles.InputsContainer}>
            <View
              style={{
                width: wp("85%"),
                flexDirection: "row",
                justifyContent: "space-between",
                height: hp("9%")
              }}
            >
              <PhoneNumberPicker
                countryHint={{
                  name: "Pakistan",
                  cca2: "PK",
                  callingCode: "92"
                }}
                onChange={this.PhoneNumberPickerChanged.bind(this)}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity color="#FE4141" style={styles.buttonRegister}>
        <Text style={styles.registerText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            marginTop: hp("5%"),
            fontFamily: "LexendDeca-Regular",
            fontSize: hp("2%"),
            color: "#00BCD4"
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[600, 50]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
          onCloseEnd={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const IMAGE_SIZE = 200;

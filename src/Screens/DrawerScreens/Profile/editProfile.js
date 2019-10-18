import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Animated,
  StatusBar,
  Keyboard,
  Dimensions
} from "react-native";

// FILES
import { Colors } from "../../../Constant/color";
import { ProfileGrade, ProfileDescription } from "../../../Static/profileData";
import ParallexHeader from "../../../Components/parallexHeader";
import styles from "./style";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import NameIcon from "react-native-vector-icons/Fontisto";
import LocationIcon from "react-native-vector-icons/Entypo";
import CakeIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EnvolopIcon from "react-native-vector-icons/FontAwesome5";
import GenderIcon from "react-native-vector-icons/FontAwesome";
import Reinput from "reinput";
import DatePicker from "react-native-datepicker";

import { TextField } from "react-native-material-textfield";

// CONSTANT
const { appColor, gray } = Colors;

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

export default class EditProfile extends Component {
  state = {
    phone: "",
    multiplesInput: [
      { label: "Name", icon: "person" },
      { label: "Email", icon: "envelope" },
      { label: "Gender", icon: "transgender-alt" },
      { label: "City", icon: "location" },
      { label: "Birthday", icon: "cake" }
    ],
    name: "",
    email: "",
    gender: "",
    location: "",
    birthday: "",
    date: "2016-05-15"
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggleCheckbox(item) {
    const currentItm = item;
    const modidyCheck = !item.checked
      ? (item.checked = true)
      : (item.checked = false);

    this.setState({ ProfileGrade });
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  editProfile = () => {
    const { name, email, gender, location, birthday } = this.state;
    Keyboard.dismiss();
    // console.log({ name, email, gender, location, birthday });
  };

  _renderScrollViewContent = () => {
    const barWidth = Dimensions.get("screen").width - 250;
    const progressCustomStyles = {
      backgroundColor: appColor,
      borderColor: "#E9E8E8"
    };
    const { phone } = this.state;

    return (
      <View style={{ width: "95%", alignSelf: "center" }}>
        <View
          style={{
            marginTop: hp("15%"),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: appColor,
              fontSize: 24,
              fontFamily: "Nunito-ExtraBold"
            }}
          >
            Edit Profile
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <NameIcon name="person" size={hp("3%")} color={appColor} />
          <Reinput
            label="Name"
            style={styles.inputStyle}
            marginTop={hp("2%")}
            onChangeText={e => this.handleChange(e, "name")}
            activeColor={appColor}
          />
        </View>

        <View style={styles.inputContainer}>
          <EnvolopIcon name="envelope" size={hp("3%")} color={appColor} />
          <Reinput
            label="Email"
            style={styles.inputStyle}
            marginTop={hp("2%")}
            onChangeText={e => this.handleChange(e, "email")}
            activeColor={appColor}
          />
        </View>

        <View style={styles.inputContainer}>
          <GenderIcon name="transgender-alt" size={hp("3%")} color={appColor} />
          <Reinput
            label="Gender"
            style={styles.inputStyle}
            marginTop={hp("2%")}
            onChangeText={e => this.handleChange(e, "gender")}
            activeColor={appColor}
          />
        </View>

        <View style={styles.inputContainer}>
          <LocationIcon name="location" size={hp("3%")} color={appColor} />
          <Reinput
            label="Location"
            style={styles.inputStyle}
            marginTop={hp("2%")}
            onChangeText={e => this.handleChange(e, "location")}
            activeColor={appColor}
          />
        </View>

        <View style={styles.inputContainer}>
          <CakeIcon name="cake" size={hp("3%")} color={appColor} />
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1990-05-01"
            maxDate="2019-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => this.editProfile()}
        >
          <Text style={[styles.callText]}>Save</Text>
        </TouchableOpacity>
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
          title={"Profile"}
          titleStyle={styles.titleStyle}
        />
      </View>
    );
  }
}

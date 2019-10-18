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
  Button,
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
import { CheckBox } from "react-native-elements";
import Modal from "react-native-modal";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import Icon from "react-native-vector-icons/Ionicons";
import EditIcon from "react-native-vector-icons/MaterialIcons";
import CrossIcon from "react-native-vector-icons/Entypo";
import ImagePicker from "react-native-image-picker";

// CONSTANT
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

export default class Profile extends Component {
  state = {
    isGrade: null,
    ProfileGrade: null,
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
    activeGrade: null,
    avatarSource: ""
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggleCheckbox(item) {
    const currentItm = item;
    let items = [];
    const modidyCheck = !item.checked
      ? (item.checked = true)
      : (item.checked = false);

    ProfileGrade.map((v, i) => {
      v.checked == true ? items.push(v.name) : null;
    });

    this.setState({ ProfileGrade, activeGrade: items.pop() });
  }

  changeAvatar = () => {
    let options = {};

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // You can also display the image using data:
        const source = { uri: "data:image/jpeg;base64," + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  _renderScrollViewContent = () => {
    const barWidth = Dimensions.get("screen").width - 250;
    const progressCustomStyles = {
      backgroundColor: appColor,
      borderColor: "#E9E8E8"
    };
    const { progress, activeGrade, avatarSource } = this.state;

    return (
      <View style={{ width: "95%", alignSelf: "center" }}>
        <ScrollView>
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
              Sarim
            </Text>

            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                borderRadius: 50,

                shadowColor: "#00000021",
                justifyContent: "center",
                shadowOffset: {
                  width: 0,
                  height: 3,
                  justifyContent: "center",
                  alignItems: "center"
                },
                shadowOpacity: 0.22,
                shadowRadius: 3,
                elevation: 3
              }}
              onPress={() => this.changeAvatar()}
            >
              <Image
                source={avatarSource}
                resizeMode="cover"
                style={{
                  flexDirection: "row",
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  alignSelf: "center"
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 10,
                  top: 75,
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  shadowColor: "#00000021",
                  justifyContent: "center",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                    justifyContent: "center",
                    alignItems: "center"
                  },
                  shadowOpacity: 1,
                  shadowRadius: 3,
                  elevation: 3,
                  backgroundColor: "white"
                }}
              >
                <EditIcon
                  name="edit"
                  size={hp("2%")}
                  color={appColor}
                  style={{ alignSelf: "center" }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "space-around", height: hp("30%") }}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text style={{ fontFamily: "LexendDeca-Regular" }}>
                {activeGrade ? `${activeGrade} + ` : " Active Grade +"}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                marginTop: hp("3%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text style={{ fontFamily: "LexendDeca-Regular" }}>
                Profile completion
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ProgressBarAnimated
                  width={barWidth}
                  height={11}
                  value={this.state.progress}
                  backgroundColorOnComplete="#148cF0"
                  {...progressCustomStyles}
                />
                <Text
                  style={{ marginLeft: "3%", fontFamily: "LexendDeca-Regular" }}
                >
                  {progress + "%"}
                </Text>
              </View>
            </View>
            <Modal
              isVisible={this.state.isModalVisible}
              style={{
                backgroundColor: "white",
                flex: 1,
                width: "100%",
                alignSelf: "center",
                borderRadius: 10
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: appFont,
                      fontSize: hp("3%"),
                      alignSelf: "center"
                    }}
                  >
                    Change your grade
                  </Text>
                  <TouchableOpacity onPress={this.toggleModal}>
                    <CrossIcon
                      name="circle-with-cross"
                      size={hp("4%")}
                      color={appColor}
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  contentContainerStyle={styles.listContainer}
                  data={ProfileGrade}
                  horizontal={false}
                  numColumns={1}
                  keyExtractor={item => {
                    return item.id;
                  }}
                  ItemSeparatorComponent={() => {
                    return <View style={styles.separator} />;
                  }}
                  renderItem={post => {
                    const item = post.item;
                    return (
                      <View style={{ width: "100%" }}>
                        <CheckBox
                          title={item.name}
                          checked={item.checked}
                          onPress={() => this.toggleCheckbox(item)}
                          style={{ width: "100%" }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            </Modal>
            <View
              style={{
                borderBottomWidth: 0.4,
                borderColor: "#848484"
              }}
            >
              <Text style={{ fontSize: 18, fontFamily: "Nunito-ExtraBold" }}>
                Account Details
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: hp("3%")
                }}
              >
                <Text
                  style={{ color: "#848484", fontFamily: "LexendDeca-Regular" }}
                >
                  +92-3172142662
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Ed itNumber")}
                >
                  <EditIcon name="edit" size={hp("3%")} color={appColor} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 18, fontFamily: "Nunito-ExtraBold" }}>
              Profile Details
            </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("EditProfile")}
            >
              <EditIcon name="edit" size={hp("3%")} color={appColor} />
            </TouchableOpacity>
          </View>
          {ProfileDescription.map(v => {
            return (
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 0.4,
                  borderColor: "#848484",
                  height: hp("6%"),
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{ color: "#848484", fontFamily: "LexendDeca-Regular" }}
                >
                  {v}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            style={{
              justifyContent: "center",
              width: wp("100%"),
              height: hp("5%")
            }}
          >
            <Text style={{ fontFamily: "LexendDeca-Regular" }}>Sign Out</Text>
          </TouchableOpacity>
        </ScrollView>
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

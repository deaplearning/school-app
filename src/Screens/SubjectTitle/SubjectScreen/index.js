import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

// FILES
import styles from "./style";
import ParallexHeader from "../../../Components/parallexHeader";
import ReusableCard from "../../../Components/Card";
import CardSlider from "../../../Components/CardSlider";
import { Datas } from "../../../Static/subjectsData";
import Loader from "../../../Components/Loader";
import Thumbnail from "../../../Components/Thumbnail";
import { Colors } from "../../../Constant/color";

const { appFont } = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Dashboard")}
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
    >
      <Icon name={"arrow-left"} size={22} color="orange" />
    </TouchableOpacity>
  );
};

export default class Subject extends Component {
  state = {
    loader: false,
    subjectsTitle: "",
    shouldRenderThumbnail: false,
    definition: ""
  };

  componentDidMount() {
    const { subject, definition } = this.props.navigation.state.params.data;

    setTimeout(() => {
      this.setState({ loader: false, title: subject, definition });
    }, 3000);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { subject, definition } = nextProps.navigation.state.params.data;

    return {
      loader: false,
      title: subject,
      definition
    };
  }

  clickEventListener(item) {
    alert(item.subject);
  }

  renderCardSlider = () => {
    const { title } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {title === "English" && (
          <TouchableOpacity
            style={{
              shadowColor: "#00000021",

              shadowOffset: {
                width: 0,
                height: 3,
                justifyContent: "center",
                alignItems: "center"
              },
              shadowOpacity: 0.22,
              shadowRadius: 3,
              elevation: 3,
              marginVertical: 10,
              backgroundColor: "white",
              flexBasis: "42%",
              marginHorizontal: 15,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
            onPress={() => this.props.navigation.navigate("Videos", { title })}
          >
            <View
              style={{
                height: hp("30%"),
                width: wp("45%"),
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#696969",
                  textAlign: "center"
                }}
              >
                {"Last Sermon (P.B.U.H)"}
              </Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                  width: "90%",
                  alignSelf: "center"
                }}
              />
              <Image
                style={{
                  height: hp("12%"),
                  width: wp("100%"),
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                source={require("./eng.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
        {/* math */}
        {title === "Mathematics" && (
          <TouchableOpacity
            style={{
              shadowColor: "#00000021",
              flexDirection: "row",
              shadowOffset: {
                width: 0,
                height: 3,
                justifyContent: "center",
                alignItems: "center"
              },
              shadowOpacity: 0.22,
              shadowRadius: 3,
              elevation: 3,
              marginVertical: 10,
              backgroundColor: "white",
              flexBasis: "42%",
              marginHorizontal: 15,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("Videos", { title })}
          >
            <View
              style={{
                height: hp("30%"),
                width: wp("45%"),
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#696969"
                }}
              >
                {"Algebra"}
              </Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                  width: "90%",
                  alignSelf: "center"
                }}
              />
              <Image
                style={{
                  height: hp("12%"),
                  width: wp("100%"),
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                source={require("./algebra.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
        {/* PHYSICS */}
        {title === "Physics" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "nowrap"
            }}
          >
            <TouchableOpacity
              style={{
                shadowColor: "#00000021",
                flexDirection: "row",

                shadowOffset: {
                  width: 0,
                  height: 3,
                  justifyContent: "center",
                  alignItems: "center"
                },
                shadowOpacity: 0.22,
                shadowRadius: 3,
                elevation: 3,
                marginVertical: 10,
                backgroundColor: "white",
                flexBasis: "42%",
                marginHorizontal: 15,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() =>
                this.props.navigation.navigate("Videos", { title: "physic1" })
              }
            >
              <View
                style={{
                  height: hp("30%"),
                  width: wp("45%"),
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#696969"
                  }}
                >
                  {"Error"}
                </Text>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                    width: "90%",
                    alignSelf: "center"
                  }}
                />
                <Image
                  style={{
                    height: hp("12%"),
                    width: wp("100%"),
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  source={require("./error.png")}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                shadowColor: "#00000021",

                shadowOffset: {
                  width: 0,
                  height: 3,
                  justifyContent: "center",
                  alignItems: "center"
                },
                shadowOpacity: 0.22,
                shadowRadius: 3,
                elevation: 3,
                marginVertical: 10,
                backgroundColor: "white",
                flexBasis: "42%",
                marginHorizontal: 15,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() =>
                this.props.navigation.navigate("Videos", { title: "physic2" })
              }
            >
              <View
                style={{
                  height: hp("30%"),
                  width: wp("45%"),
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#696969"
                  }}
                >
                  {"Kinematic"}
                </Text>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                    width: "90%",
                    alignSelf: "center"
                  }}
                />
                <Image
                  style={{
                    height: hp("12%"),
                    width: wp("100%"),
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  source={{
                    uri: "https://i.ytimg.com/vi/O5B6vwVA7ks/maxresdefault.jpg"
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        {title === "Biology" && (
          <TouchableOpacity
            style={{
              shadowColor: "#00000021",
              flexDirection: "row",
              shadowOffset: {
                width: 0,
                height: 3,
                justifyContent: "center",
                alignItems: "center"
              },
              shadowOpacity: 0.22,
              shadowRadius: 3,
              elevation: 3,
              marginVertical: 10,
              backgroundColor: "white",
              flexBasis: "42%",
              marginHorizontal: 15,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("Videos", { title })}
          >
            <View
              style={{
                height: hp("30%"),
                width: wp("45%"),
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#696969"
                }}
              >
                {"Cells"}
              </Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                  width: "90%",
                  alignSelf: "center"
                }}
              />
              <Image
                style={{
                  height: hp("12%"),
                  width: wp("60%"),
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                source={require("./bacteria-virus-cells-germs-epidemic-bacillus-icons-vector-illustration-55595892.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  _renderScrollViewContent = () => {
    const { title, shouldRenderThumbnail, definition } = this.state;

    this.render();
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-evenly"
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 28,
                  color: "orange",
                  fontFamily: "Nunito-ExtraBold",
                  alignSelf: "center"
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "lightgray",
                  fontFamily: "LexendDeca-Regular"
                }}
              >
                Chapters | Journeys
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: hp("3%"), fontFamily: appFont }}>
                {definition}
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: hp("3%"),
                color: "orange",
                marginTop: hp("3%")
              }}
            >
              Introduction
            </Text>
          </View>

          {this.renderCardSlider()}

          {/* <View style={{backgroundColor: "red" , width:  300 , height: 100}}></View> */}
        </ScrollView>
      </View>
    );
  };

  render() {
    const { loader, title } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {loader ? (
          <Loader />
        ) : (
          <ParallexHeader
            _renderScrollViewContent={this._renderScrollViewContent}
            leftIcon={leftIcon(this.props)}
            defaultHeaderColor={styles.defaultHeaderColor}
            // defaultHeaderImage=
            title={title}
            titleStyle={styles.titleStyle}
          />
        )}
      </View>
    );
  }
}

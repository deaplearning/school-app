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
  Dimensions,
  ImageBackground
} from "react-native";

// PACKAGES
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// FILES
import { Datas } from "../../Static/subjectsData";
import { Colors } from "../../Constant/color";
import styles from "./dashboardStyle";
import { sliderWidth, itemWidth } from "../../Components/sliderEntryStyle";
import SliderEntry from "../../Components/sliderEntry";
import ParallexHeader from "../../Components/parallexHeader";
import ReusableCard from "../../Components/Card";
import Loader from "../../Components/Loader";
import CardSlider from "../../Components/CardSlider";
import { Dashboard as DashboardData } from "../../Static/Api/dashboard";

// IMAGES
import HeaderBanner from "../../../assets/images/banner.png";
import FooterBanner from "../../../assets/images/bottombanner.png";
import Sun from "../../../assets/images/sun.jpg";

const SLIDER_1_FIRST_ITEM = 1;
const { appColor } = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        borderRadius: 27,
        position: "absolute",
        left: 16,
        top: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#00000021",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 3
      }}
      onPress={() => props.navigation.openDrawer()}
    >
      <Icon name="menu" size={hp("4%")} color={appColor} />
    </TouchableOpacity>
  );
};

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loader: false,
      goTop: false,
      weatherName: "",
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
  }

  componentDidMount() {
    this.renderWeather();
  }

  clickEventListener(item) {
    alert(item.title);
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry data={item} parallax={true} parallaxProps={parallaxProps} />
    );
  }

  callingMethod = data => {
    this.props.navigation.navigate("Subject", { data });
  };

  renderWeather = () => {
    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 12) {
      this.setState({ weatherName: "Good Morning" });
    } else if (hrs >= 12 && hrs <= 17) {
      this.setState({ weatherName: "Good Afternoon" });
    } else if (hrs >= 17 && hrs <= 24) {
      this.setState({ weatherName: "Good Evening" });
    }
  };

  render() {
    const { loader, weatherName } = this.state;

    return (
      <ScrollView style={{ flex: 1 }}>
        {loader ? (
          <Loader />
        ) : (
          <ImageBackground style={styles.container} source={HeaderBanner}>
            {/* <View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center"
                  }}
                >
                  {leftIcon(this.props)}
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      justifyContent: "space-around",
                      marginLeft: wp("25%")
                    }}
                  >
                    {weatherName === "Good Afternoon" ? (
                      <Image
                        source={{
                          uri:
                            "https://www.gifimages.pics/images/quotes/english/general/good-afternoon-smiley-sun-gif-52650-111549.gif"
                        }}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          opacity: 0.5
                        }}
                      />
                    ) : weatherName === "Good Morning" ? (
                      <Image
                        source={Sun}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          opacity: 0.5
                        }}
                      />
                    ) : weatherName === "Good Evening" ? (
                      <Image
                        source={
                          "https://i.pinimg.com/originals/74/44/6a/74446a03f4c1949d4448926e02eb9ef3.jpg"
                        }
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 50,
                          opacity: 0.5
                        }}
                      />
                    ) : null}

                    <Image
                      source={HeaderBanner}
                      style={{ width: 170, height: 350 }}
                      resizeMode={"stretch"}
                    />
                  </View>
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: hp("12%")
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: "5%",

                      color: appColor,
                      fontFamily: "LexendDeca-Regular"
                    }}
                  >
                    {weatherName}
                  </Text>
                  <Text
                    style={{
                      marginLeft: "5%",
                      marginRight: "5%",
                      color: "black",
                      fontFamily: "Nunito-ExtraBold",
                      fontSize: 24,
                      fontWeight: "bold"
                    }}
                  >
                    Naveen 10
                  </Text>
                  <View
                    style={{
                      marginTop: "5%"
                    }}
                  >
                    <View
                      style={{
                        width: 200,
                        height: 30,
                        marginLeft: "5%",
                        borderColor: "black",
                        borderWidth: 2,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text style={{ fontSize: hp("1.5%") }}>
                        SO WHAT WILL YOU LEARN TODAY?
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View> */}

            {/* <FlatList
              style={styles.list}
              ref={ref => {
                this.ListView_Ref = ref;
              }}
              contentContainerStyle={styles.listContainer}
              data={DashboardData}
              horizontal={false}
              numColumns={1}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({ item }) => {
                let title;

           
                title = item.subject;
                return (
                  <TouchableOpacity
                    style={[
                      {
                        backgroundColor: item.color[0]
                      },
                      styles.card
                    ]}
                    onPress={() => this.callingMethod(item)}
                  >
                    <View>
                      <Image
                        style={styles.cardImage}
                        source={item.icon}
                        resizeMode={"contain"}
                      />
                    </View>
                    <View style={styles.cardHeader}>
                      <View
                        style={{
                          alignSelf: "center"
                        }}
                      >
                        <Text style={styles.title}>{title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            /> */}
            <View>
              <Image
                source={FooterBanner}
                style={{
                  width: 220,
                  height: 90,
                  opacity: 0.3
                }}
                resizeMode="stretch"
              />
            </View>
          </ImageBackground>
        )}
      </ScrollView>
    );
  }
}

export default DashboardScreen;

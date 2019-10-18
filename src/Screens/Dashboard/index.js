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
  Dimensions
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// FILES
import { Colors } from "../../Constant/color";
import styles from "./style";
import Loader from "../../Components/Loader";
import { Dashboard as DashboardData } from "../../Static/Api/dashboard";
import { API_URL } from "../../Config/api";

// IMAGES
import HeaderBanner from "../../../assets/images/banner.png";
import Profile from "../../../assets/images/profile.jpg";

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

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loader: false,
      goTop: false,
      weatherName: "",
      slider1Ref: null,
      subjects: null
    };
    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
  }

  componentDidMount() {
    // const { classId } = this.props.navigation.state.params;

    // fetch(`${API_URL}api/subjects/${classId}`)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     // this.setState({
    //     //   classes: responseJson
    //     // });
    //     console.log(responseJson, "responcse from Dashboard")
    //   })
    //   .catch(error => console.log(error));

    fetch(`https://deaplearning.com/admin/app/api/get/subjects/2`)
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        console.log(response);
        this.setState({ subjects: response });
      })
      .catch(error => console.log(error));

    this.renderWeather();
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
    const { loader, weatherName, subjects } = this.state;

    return (
      <ScrollView style={{ flex: 1 }}>
        {loader ? (
          <Loader />
        ) : (
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              {leftIcon(this.props)}
              <View
                style={{
                  alignSelf: "flex-end"
                }}
              >
                <Image
                  source={HeaderBanner}
                  style={{ width: 170, height: 250 }}
                  resizeMode={"stretch"}
                />
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                top: hp("10%")
              }}
            >
              <View
                style={{ width: "80%", height: "20%", flexDirection: "row" }}
              >
                <Image
                  source={Profile}
                  style={{ width: 60, height: 60 }}
                  resizeMode={"stretch"}
                />
                <View style={{ flexDirection: "column" }}>
                  <View>
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
                  </View>
                  <View>
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
                      Naveen 9,10
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: "20%" }}>
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

            <View
              style={{
                marginLeft: "5%"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 24,
                  fontWeight: "bold"
                }}
              >
                SUBJECT
              </Text>
            </View>
            <FlatList
              style={styles.list}
              ref={ref => {
                this.ListView_Ref = ref;
              }}
              contentContainerStyle={styles.listContainer}
              data={subjects}
              horizontal={false}
              numColumns={1}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({ item }) => {
                let title;

                title = item.name;

                return (
                  <TouchableOpacity
                    style={[
                      {
                        backgroundColor: item.color_key
                      },
                      styles.card
                    ]}
                    onPress={() => this.callingMethod(item)}
                  >
                    <View>
                      <Image
                        style={styles.cardImage}
                        source={{
                          uri: `http://deaplearning.com/admin/app/public/img/subjects/${item.thumbnail}`
                        }}
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
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

export default Dashboard;
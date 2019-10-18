import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";
import PlayIcon from "react-native-vector-icons/FontAwesome5";
import { withNavigation } from "react-navigation";


// FILES
import styles from "./style";
import ParallexHeader from "../../../Components/parallexHeader";
import ReusableCard from "../../../Components/Card";
import CardSlider from "../../../Components/CardSlider";
import { Datas } from "../../../Static/subjectsData";
import Loader from "../../../Components/Loader";
import ReusableThumbnail from "../../../Components/Thumbnail"

const leftIcon = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Dashboard")}
      style={{
        width: wp("10%"),
        height: hp("5%"),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
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

const rightIcon = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Videos")}
      style={{
        width: wp("10%"),
        height: hp("5%"),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
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
      <Icon name={"youtube"} size={22} color="orange" />
    </TouchableOpacity>
  );
};

class Thumbnail extends Component {
  state = {
    loader: false,
    subjectsTitle: ""
  };

  componentDidMount() {
    // console.log(this.props.navigation.state.params.data);
    // const { title } = this.props.navigation.state.params.data;

    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
  }

  // clickEventListener(item) {
  //   alert(item.title);
  // }

  _renderScrollViewContent = () => {
    const { title } = this.state;

    this.render();
    return (
      <View style={styles.container}>
        <ScrollView>
        <ReusableThumbnail/>
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
            rightIcon={rightIcon(this.props)}
            defaultHeaderColor={styles.defaultHeaderColor}
            // defaultHeaderImage=
            title={"title"}
            titleStyle={styles.titleStyle}
          />
        )}
      </View>
    );
  }
}


export default withNavigation(Thumbnail)
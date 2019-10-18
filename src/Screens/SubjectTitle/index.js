import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";

// FILES
import styles from "./style";
import ParallexHeader from "../../Components/parallexHeader";
import ReusableCard from "../../Components/Card";
import CardSlider from "../../Components/CardSlider";
import { Datas } from "../../Static/subjectsData";
import Loader from "../../Components/Loader";
import Thumbnail from "../../Components/Thumbnail";

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

const rightIcon = t => {
  return (
    <TouchableOpacity
      onPress={() =>
        t.setState({ shouldRenderThumbnail: !t.state.shouldRenderThumbnail })
      }
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
      <Icon name={"youtube"} size={22} color="orange" />
    </TouchableOpacity>
  );
};

export default class Dashboard extends Component {
  state = {
    loader: true,
    subjectsTitle: "",
    shouldRenderThumbnail: false
  };

  componentDidMount() {
    const { subject } = this.props.navigation.state.params.data;

    setTimeout(() => {
      this.setState({ loader: false, title:subject });
    }, 3000);
  }

  clickEventListener(item) {
    alert(item.subject);
  }

  renderCardSlider = () => {
    return (
      <View>
        <CardSlider
          cardTitle="Introduction to Numbers"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.introduction}
        />
        <CardSlider
          cardTitle="Playing with Numbers"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.payingNumbers}
        />
        <CardSlider
          cardTitle="Factors and Multiples"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.factors}
        />
        <CardSlider
          cardTitle="Fractions"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.fraction}
        />
        <CardSlider
          cardTitle="Decimal"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.decimal}
        />
        <CardSlider
          cardTitle="Money"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.money}
        />
        <CardSlider
          cardTitle="Introduction to Geometry"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.geometry}
        />
        <CardSlider
          cardTitle="Circles"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.circle}
        />
        <CardSlider
          cardTitle="Data Handling"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.dataHandling}
        />
        <CardSlider
          cardTitle="Time and Date"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.introduction}
        />
        <CardSlider
          cardTitle="Perimeter and Area"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.money}
        />
        <CardSlider
          cardTitle="Measurements"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.factors}
        />
        <CardSlider
          cardTitle="Patterns"
          cardTitleStyle={{ margin: 3, fontFamily: "LexendDeca-Regular" }}
          data={Datas.fraction}
        />
      </View>
    );
  };

  renderThumbnail = () => {
    return (
      <View>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </View>
    );
  };

  _renderScrollViewContent = () => {
    const { title, shouldRenderThumbnail } = this.state;

    this.render();
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: hp("40%"),
              justifyContent: "space-evenly"
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 28,
                  color: "orange",
                  fontFamily: "Nunito-ExtraBold"
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
            <ReusableCard
              cardImage="https://img.icons8.com/color/48/000000/react-native.png"
              subTitle="Introuction to Numbers"
              cardTitle="Counting"
              cardStyle={styles.customCard}
              cardTextStyle={styles.customCardText}
            />
          </View>

          {!shouldRenderThumbnail && this.renderCardSlider()}
          {shouldRenderThumbnail && this.renderThumbnail()}

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
            rightIcon={rightIcon(this)}
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

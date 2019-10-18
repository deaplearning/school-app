import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";
import PlayIcon from "react-native-vector-icons/FontAwesome5";
// FILES
import styles from "./style";

class Thumbnail extends Component {
  static defaultProps = {
    cardTitle: "",
    data: [
      {
        id: 1,
        title: "Data All Around",
        thumbnail: "https://img.icons8.com/dotty/80/000000/unchecked-circle.png"
      },
      {
        id: 15,
        title: "Bar Graph",
        thumbnail: "https://img.icons8.com/color/48/000000/graph.png"
      },
      {
        id: 2,
        title: "Picture Graph",
        thumbnail: "https://img.icons8.com/material-two-tone/24/000000/graph.png"
      },

      {
        id: 6,
        title: "Practice",
        thumbnail: "https://img.icons8.com/color/48/000000/pilates.png"
      },
      {
        id: 7,
        title: "Tests",
        thumbnail: "https://img.icons8.com/officel/48/000000/test-passed.png"
      }
    ],
    cardTitleStyle: null
  };

  gotoPage = title => {
      this.props.navigation.navigate("Videos");
  };

  renderCards = () => {
    const { data } = this.props;

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={data}
          horizontal={false}
          numColumns={data ? data.length : null}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => this.gotoPage(item.title)}
              >
                <View
                  style={{
                    height: hp("17%"),
                    width: wp("35%"),
                    justifyContent: "space-evenly",
                    flexDirection: "column"
                  }}
                >
                  <ImageBackground
                    style={styles.cardImage}
                    source={{ uri: item.thumbnail }}
                    resizeMode="contain"
                  >
                    <PlayIcon
                      name={"play-circle"}
                      size={38}
                      color="white"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center"
                      }}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    );
  };

  render() {
    const { cardTitle, cardTitleStyle } = this.props;

    return (
      <View>
        <View style={{ margin: "3%" }}>
          <Text
            style={
              cardTitleStyle
                ? cardTitleStyle
                : { fontSize: hp("2%"), fontWeight: "bold" }
            }
          >
            {cardTitle}
          </Text>
        </View>

        {this.renderCards()}
      </View>
    );
  }
}

export default withNavigation(Thumbnail);

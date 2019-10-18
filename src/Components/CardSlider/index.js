import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";

// FILES
import styles from "./style";

class CardSlider extends Component {
  static defaultProps = {
    cardTitle: "",
    data: null,
    cardTitleStyle: null
  };

  gotoPage = title => {
    if (title == "Physical Quantity") {
      this.props.navigation.navigate("Library");
    }
  };

  renderCards = () => {
    const { data, cardTitleStyle } = this.props;

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
                    height: hp("30%"),
                    width: wp("45%"),
                    justifyContent: "space-evenly",
                    flexDirection: "column"
                  }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 2,
                      width: "90%",
                      alignSelf: "center"
                    }}
                  />
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                    resizeMode="contain"
                  />
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

export default withNavigation(CardSlider);

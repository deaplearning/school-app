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
  RefreshControl
} from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";

// FILES
import ParallexHeader from "../../Components/parallexHeader";
import { Colors } from "../../Constant/color";
import data from "../../Static/classCategory";
import styles from "./style";
import {API_URL} from "../../Config/api"

// CONSTANT
const { appColor, appFont } = Colors;

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
      <Icon name={"arrow-left"} size={22} color={appColor} />
    </TouchableOpacity>
  );
};

export default class Home extends Component {
  state = {
    classes: null
  };

  componentDidMount() {
    fetch(`${API_URL}api/classes`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          classes: responseJson
        });
      })
      .catch(error => console.log(error));
  }

  addProductToCart = e => {
    Alert.alert("Success", "The product has been added to your cart");
  };

  _renderScrollViewContent = () => {
    const { classes } = this.state;
    this.render();

    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={classes}
            horizontal={false}
            numColumns={3}
            keyExtractor={item => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={post => {
              const item = post.item;
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    this.props.navigation.navigate("Dashboard", {
                      classId: item.id
                    })
                  }
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.fill}>
        <ParallexHeader
          _renderScrollViewContent={this._renderScrollViewContent}
          leftIcon={leftIcon(this.props)}
        />
      </View>
    );
  }
}

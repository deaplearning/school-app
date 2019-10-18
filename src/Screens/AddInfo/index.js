import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

// PACKAGES
import { withNavigation } from "react-navigation";
import Reinput from "reinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Container, Header, Content, Input, Item } from "native-base";

// FILES
import styles from "./style";
import { Colors } from "../../Constant/color";

const { appColor, appFont } = Colors;

class AddInfo extends Component {
  state = { defaultLoading: false, number: "", pickerValue: "" };

  componentWillUnmount() {
    this.setState({ defaultLoading: false, number: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <View
          style={{
            height: "80%",
            width: "80%",
            justifyContent: "space-evenly"
          }}
        >
          <View style={styles.headContainer}>
            <Text style={styles.headText}>Add Info</Text>
          </View>

          <Item regular>
            <Input placeholder="First Name" />
          </Item>
          <Item regular>
            <Input placeholder="Last Name" />
          </Item>
          <Item regular>
            <Input placeholder="Email" />
          </Item>
          <Item regular>
            <Input placeholder="Date of Birth" />
          </Item>
          <TouchableOpacity
            color="#FE4141"
            style={styles.buttonRegister}
            title="Register"
            onPress={() => {
              this.props.navigation.navigate("Dashboard");
            }}
          >
            <Text style={styles.registerText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(AddInfo);

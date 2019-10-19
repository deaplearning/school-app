import React, { Component } from "react";
import { Text } from "react-native";
//import Splash from '/Users/imac/Desktop/Native/byjus/src/Screens/Splash/splash.js'
import Splash from "./splash";
import Login from "../LogIn";
import PhoneAuthTest from "../../Screens/Splash/phoneauth"

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: "splash" };
    setTimeout(() => {
      this.setState({ currentScreen: "home" });
    }, 3000);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return this.state.currentScreen == "splash" ? (
      <Splash />
    ) : (
      <Login nav={this.props.navigation} />
    );
  }
}

export default index;

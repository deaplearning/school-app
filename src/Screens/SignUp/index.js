import React, {Component} from 'react';
import styles from './style';
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
} from 'react-native';



// PACKAGES
import Reinput from 'reinput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PhoneNumberPicker from "react-native-country-code-telephone-input";

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

// FILES
import {Colors} from '../../Constant/color';

const {appFont} = Colors;

export default class SignUP extends Component {


  PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
    this.setState({
      countryName: country.name,
      callingCode: callingCode,
      phoneNo: phoneNumber
    });
  }

  state = {value: ''};

  updateValue = value => {
    this.setState({value: value});
  };

  state = {value: '', defaultLoading: false};

  componentWillUnmount() {
    this.setState({defaultLoading: false});
  }

  loginUser = () => {
    this.setState({defaultLoading: true});
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  };

  render() {
    const {defaultLoading} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />

        <View style={styles.headContainer}>
          <Text style={styles.headText}>Access</Text>

          <Text style={styles.headDownText}> 5000+ Engaging Videos</Text>
        </View>

        <View style={styles.InputsContainer}>
          <Reinput
            underlineColor="#898989"
            labelActiveColor="#00BCD4"
            labelColor="#898989"
            underlineActiveColor="#00BCD4"
            label="Name"
            style={[{fontFamily: appFont}, styles.nameInput]}
          />

          <View
            //Container for picker and number input
            style={{
              width: wp('95%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: hp('12%'),
              borderColor: '#898989',
              marginTop: hp('2%'),
              //backgroundColor:"blue",
              alignItems:"center",
              marginLeft:wp("9%")
              
              
            }}>
             <PhoneNumberPicker 
              countryHint={{ name: "Pakistan", cca2: "PK", callingCode: "92" }}
              onChange={this.PhoneNumberPickerChanged.bind(this)}
            />
          </View>
          <Reinput
            underlineColor="#898989"
            labelActiveColor="#00BCD4"
            labelColor="#898989"
            underlineActiveColor="#00BCD4"
            label="Email"
            style={styles.nameInput3}
          />

          <Reinput
            underlineColor="#898989"
            labelActiveColor="#00BCD4"
            labelColor="#898989"
            underlineActiveColor="#00BCD4"
            label="City / Nearest location"
            style={styles.nameInput}
          />
        </View>

        <View style={styles.buttonAndIndicator}>
          {defaultLoading ? (
            <SkypeIndicator color="#00BCD4" size={20} />
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                color="#FE4141"
                style={styles.buttonRegister}
                title="Register"
                onPress={() => {
                //   this.loginUser();
                this.props.navigation.navigate("AddPhoneNumber")
                }}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.bottomView}>
          <View style={styles.leftContainer}>
            <Text
              style={{fontSize: hp('2%'), fontFamily: 'LexendDeca-Regular'}}>
              Already registered ?
            </Text>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Text style={styles.textUnderline}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text
              style={{fontSize: hp('2%'), fontFamily: 'LexendDeca-Regular'}}>
              and
            </Text>
            <TouchableOpacity>
              <Text style={styles.textUnderline}>T&C</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
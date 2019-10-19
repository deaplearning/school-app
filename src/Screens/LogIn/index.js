import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

// PACKAGES
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner1.png';
import Logo from '../../../assets/banners/logo.png';

class Login extends Component {
  state = {
    code: '',
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={Banner}>
        <ScrollView>
          <View style={styles.childContainer}>
            <View>
              <Image
                source={Logo}
                style={styles.logoStyle}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Login Your Account</Text>

              <Input
                placeholder="Phone Number"
                bgColor="#e3e6e4"
                borderless={true}
                keyboardType="numeric"
                style={{width: wp('85%')}}
              />
              <TouchableOpacity
                ref="touchableOpacity"
                style={styles.nextBtnContainer}
                onPress={() => this.props.navigation.navigate("PhoneVerification")}
                >
                <LinearGradient
                  colors={['#c775b0', '#5058a6']}
                  start={{x: 0.2, y: 0.2}}
                  end={{x: 0.6, y: 0.1}}
                  style={styles.nextBtnSubContainer}>
                  <Text style={{color: 'white'}}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={styles.lineContainer}>
                <View style={styles.hairline} />
                <Text style={styles.loginButtonBelowText1}>OR</Text>
                <View style={styles.hairline} />
              </View>
            </View>

            <TouchableOpacity style={styles.googleBtnContainer}>
              <View style={styles.googleBtnSubContainer}>
                <View
                  style={{
                    borderRightWidth: 2,
                    borderColor: '#e3e6e4',
                  }}>
                  <GoogleIcon name="google" color="red" size={18} />
                </View>
              </View>
              <Text style={{color: 'red'}}>Sign Up With Google</Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignSelf: 'center',
                width: '85%',
              }}>
              <View>
                <Text>Don't Have an account?</Text>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={{color: '#c775b0'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default withNavigation(Login);

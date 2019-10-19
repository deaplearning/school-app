import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

// PACKAGES
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ReloadIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'galio-framework';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner1.png';
import Logo from '../../../assets/banners/logo.png';

// CONSTANT

export default class PhoneVerification extends Component {
  state = {
    code: '',
  };

  render() {

    return (
      <ImageBackground style={styles.container} source={Banner}>
        <ScrollView>
          <View
            style={styles.subContainer}>
            <View>
              <Image
                source={Logo}
                style={styles.logoStyling}
                resizeMode={'contain'}
              />
            </View>
            {/* <View style={{justifyContent: 'center', alignItems: 'center'}}> */}
            <Text style={{fontSize: hp('3%'), color: '#c775b0'}}>
              Verify Your Phone Number
            </Text>
            <OTPInputView
              style={{width: '80%', height: 100}}
              pinCount={6}
              code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={code => {
                this.setState({code});
              }}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />


            <TouchableOpacity
              onPress={() => alert('Resending Code')}
              style={styles.btnStyle}>
              <ReloadIcon name="reload" size={22} color={"gray"} />
              <Text style={{color: "gray", fontFamily: 'Nunito-ExtraBold'}}>
                Resend
              </Text>
            </TouchableOpacity>
            <LinearGradient
                colors={['#c775b0', '#5058a6']}
                start={{x: 0.2, y: 0.2}}
                end={{x: 0.6, y: 0.1}}
                style={{
                  height: hp('7%'),
                  width: wp('85%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  shadowColor: '#00000021',
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.37,
                  shadowRadius: 7.49,
                  elevation: 3,
                }}>
            <Button color="transparent">
              NEXT
            </Button>
            </LinearGradient>
            {/* </View> */}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

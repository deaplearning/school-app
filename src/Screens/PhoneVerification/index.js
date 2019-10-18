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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'galio-framework';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner1.png';
import Logo from '../../../assets/banners/logo.png';
import {Colors} from '../../Constant/color';

// CONSTANT
const {appColor, appFont} = Colors;

export default class PhoneVerification extends Component {
  state = {
    code: '',
  };

  render() {
    const {container, btnStyle} = styles;

    return (
      <ImageBackground style={container} source={Banner}>
        <ScrollView>
          <View
            style={{
              height: hp('90%'),
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Image
                source={Logo}
                style={{width: 100, height: 80}}
                resizeMode={'stretch'}
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
              style={btnStyle}>
              <ReloadIcon name="reload" size={22} color={appColor} />
              <Text style={{color: appColor, fontFamily: 'Nunito-ExtraBold'}}>
                Resend
              </Text>
            </TouchableOpacity>
            <Button color="#50C7C7" shadowless>
              NEXT
            </Button>
            {/* </View> */}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

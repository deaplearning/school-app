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
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from 'react-native-google-signin';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner1.png';
import Logo from '../../../assets/banners/logo.png';
import {Colors} from '../../Constant/color';

// CONSTANT
const {appColor, appFont} = Colors;

export default class AddPhoneNumber extends Component {
  state = {
    code: '',
  };

  async componentDidMount() {
    this._configureGoogleSignIn();
  }
  _configureGoogleSignIn() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '221366251240-3bb48v2flrntb3hagriivopj5n0v1pms.apps.googleusercontent.com', //Replace with your own client id
      offlineAccess: true,
      hostedDomain: '',
      loginHint: '',
      forceConsentPrompt: true,
      accountName: '',
      iosClientId:
        'XXXXXX-krv1hjXXXXXXp51pisuc1104q5XXXXXXe.apps.googleusercontent.com',
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.revokeAccess();
      console.log(userInfo);
      Alert.alert(userInfo.user.name);
      console.log(userInfo.user.id);
      console.log(userInfo.user.email);
      console.log(userInfo.user.photo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.log('Something went wrong:', error.toString());
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
        
      }

    }
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
              <Text style={styles.inputText}>Enter Your Phone Number</Text>

              <Input
                placeholder="Phone Number"
                bgColor="#e3e6e4"
                borderless={true}
                keyboardType="numeric"
                style={{width: wp('85%')}}
              />
              <LinearGradient
                colors={['#c775b0', '#5058a6']}
                start={{x: 0.2, y: 0.2}}
                end={{x: 0.6, y: 0.1}}
                style={{
                  height: hp('7%'),
                  width: wp('85%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Button color="transparent" shadowless>
                  NEXT
                </Button>
              </LinearGradient>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  marginTop: 10,
                }}>
                <View>
                  <Text>Have an account?</Text>
                </View>

                <TouchableOpacity>
                  <Text style={{color: '#c775b0'}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.googleBtnContainer}
              onPress={this._signIn}>
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
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

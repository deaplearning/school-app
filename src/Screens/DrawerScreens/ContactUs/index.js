import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView
} from 'react-native';

// PACKAGES
import TabIcon from 'react-native-vector-icons/SimpleLineIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import Toast, {DURATION} from 'react-native-easy-toast';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input, Button} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';


// FILES
import styles from './style';
import ReusableCard from '../../../Components/Card';
import {Colors} from '../../../Constant/color';
import Banner from '../../../../assets/banners/banner1.png';


const {appColor, appblackColor} = Colors;

export default class ContactUs extends Component {
  _renderScrollViewContent = () => {
    return (
      <View style={styles.container}>
        {/* <ScrollView> */}
        <View
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            height: hp('8%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.openDrawer()}>
            <MenuIcon name="menu" size={hp('4%')} color={appblackColor} />
          </TouchableOpacity>

          {/* <View>
            <Text>Contact Us</Text>
          </View> */}
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 27,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: wp('3%'),
            }}
            onPress={() => this.props.navigation.navigate('Notification')}>
            <Icon name="notifications" size={hp('4%')} color={appblackColor} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: wp('90%'),
            height: hp('50%'),
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            shadowColor: '#00000021',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 3,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View style={{width: wp('100%'), height: hp('10%')}}>
            <Text style={{alignSelf: 'center'}}>Send us a message</Text>
          </View>
          <View
            style={{width: wp('90%'), height: hp('10%'), alignItems: 'center'}}>
            <Input
              placeholder="Subject"
              bgColor="#e3e6e4"
              borderless={true}
              style={{width: wp('85%')}}
            />
          </View>
          <View
            style={{
              width: wp('85%'),
              backgroundColor: '#e3e6e4',
              borderRadius: 10,
            }}>
            <TextInput
              multiline={true}
              numberOfLines={6}
              placeholder={'Message'}
              style={{
                height: hp('14%'),
                textAlignVertical: 'top',
                marginLeft: wp('4%'),
              }}
            />
          </View>

            <LinearGradient
              colors={['#c775b0', '#5058a6']}
              start={{x: 0.2, y: 0.2}}
              end={{x: 0.6, y: 0.1}}
              style={{
                height: hp('7%'),
                width: wp('85%'),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: "center",
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
              <Button color="transparent">SUBMIT</Button>
            </LinearGradient>
        </View>
        <Toast
          ref="toast"
          position="bottom"
          positionValue={110}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: 'white'}}
        />
        {/* </ScrollView> */}
      </View>
    );
  };

  render() {
    return (
      <ImageBackground source={Banner} style={{flex: 1}}>
        {this._renderScrollViewContent()}
      </ImageBackground>
    );
  }
}

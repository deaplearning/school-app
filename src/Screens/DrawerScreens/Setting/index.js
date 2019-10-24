import React, {Component} from 'react';
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
  Switch,
  ImageBackground,
  Dimensions,
} from 'react-native';

// FILES
import {Colors} from '../../../Constant/color';
import styles from './style';
import Banner from '../../../../assets/banners/banner1.png';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PersonIcon from 'react-native-vector-icons/Ionicons';

// CONSTANT
const {appColor, gray, appFont, appColor2, appblackColor} = Colors;

export default class Setting extends Component {
  state = {
    isGrade: null,
    ProfileGrade: null,
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
    activeGrade: null,
    avatarSource: '',
    switchValue: true,
  };

  _renderScrollViewContent = () => {
    const barWidth = Dimensions.get('screen').width - 250;
    const progressCustomStyles = {
      backgroundColor: appColor,
      borderColor: '#E9E8E8',
    };

    onPress3 = () => {
    console.log(!this.state.switchValue, ">>")
      this.setState({ switchValue: !this.state.switchValue });
    }

    return (
      <View style={styles.container}>
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
        <ScrollView>
          <View style={styles.subContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.cardListContainer}>
                <PersonIcon
                  name="md-person"
                  size={hp('2.5%')}
                  color={appColor2}
                />

                <Text style={styles.cardListTxt}>{'  '} Account</Text>
              </View>

              <TouchableOpacity style={styles.cardListStyle}>
                <Text style={styles.cardListTxt}>Edit Profile</Text>
                <Icon
                  name="keyboard-arrow-right"
                  size={hp('2.5%')}
                  color={appblackColor}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardListStyle}>
                <Text style={styles.cardListTxt}>Change Grade</Text>
                <Icon
                  name="keyboard-arrow-right"
                  size={hp('2.5%')}
                  color={appblackColor}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.cardListContainer}>
                <Icon
                  name="notifications"
                  size={hp('2.5%')}
                  color={appColor2}
                />

                <Text
                  style={{
                    fontSize: hp('2.5%'),
                    fontFamily: appFont,
                    color: appColor2,
                  }}>
                  {'  '} Notification
                </Text>
              </View>

              <TouchableOpacity style={styles.cardListStyle}>
                <Text style={styles.cardListTxt}>App Notification</Text>
                <Switch
                  onValueChange={this.onPress3}
                  value={this.state.switchValue}
                  onTintColor={"#E0E0E0"}
                  tintColor={appColor2}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.cardListContainer}>
                <PersonIcon
                  name="md-person"
                  size={hp('2.5%')}
                  color={appColor2}
                />

                <Text style={styles.cardListTxt}>{'  '} Language</Text>
              </View>

              <TouchableOpacity style={styles.cardListStyle}>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    fontFamily: appFont,
                    color: appblackColor,
                  }}>
                  Change Language
                </Text>
                <Icon
                  name="keyboard-arrow-right"
                  size={hp('2.5%')}
                  color={appblackColor}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                width: wp('80%'),
                height: hp('20%'),
                alignSelf: 'center',
              }}>
              <Text style={styles.cardListTxt}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground source={Banner} style={{width: '100%', height: '100%'}}>
        {this._renderScrollViewContent()}
      </ImageBackground>
    );
  }
}

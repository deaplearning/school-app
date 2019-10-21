import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// PACKAGES

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

// FILES
import styles from './style';
import {Colors} from '../../../Constant/color';
import ParallexHeader from '../../../Components/parallexHeader';
import {Card, Block} from 'galio-framework';
import Banner from '../../../../assets/banners/background.png';

// CONSTANT
const {appColor, gray, appFont} = Colors;
const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 35,
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 3,
      }}
      onPress={() => props.navigation.goBack()}>
      <Icon name="ios-arrow-round-back" size={hp('4%')} color={appColor} />
    </TouchableOpacity>
  );
};

export default class Notification extends Component {
  _renderScrollViewContent = () => {
    return (
      <ImageBackground source={Banner} style={styles.bg}>
        <View style={styles.container}>
          <ScrollView>
            <Card
              borderless
              style={styles.card}
              title="Muhammad Sarim"
              caption="10 minutes ago"
              avatar="http://i.pravatar.cc/100?id=skater"
            />
            <Card
              borderless
              style={styles.card}
              title="Sohiab Ahmed"
              caption="5 minutes ago"
              avatar="http://i.pravatar.cc/100?id=skater"
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  };

  render() {
    return (
      <ParallexHeader
        _renderScrollViewContent={this._renderScrollViewContent}
        leftIcon={leftIcon(this.props)}
        defaultHeaderColor={styles.defaultHeaderColor}
        titleStyle={styles.titleStyle}
      />
    );
  }
}

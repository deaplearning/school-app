import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
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
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {Image, TouchableOpacity} from 'react-native';

import Reinput from 'reinput';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class QuizResult extends Component {
  state = {value: ''};
  updateValue = value => {
    this.setState({value: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />

        <TouchableOpacity
          style={{width: wp('14%'), height: hp('8%'), borderRadius: 30}}>
          <Icon
            name="arrowleft"
            size={30}
            style={{color: '#00BCD4', marginLeft: wp('5%')}}
          />
        </TouchableOpacity>

        <View style={styles.topContainer}>
          <View style={styles.topTextContainer}>
            <Text style={styles.topLeftText}>Check Your Quiz Scores!</Text>
          </View>

          <View style={styles.sideImage}>
            <Image
              style={styles.image}
              source={require('../../../res/img/shield.png')}
            />
          </View>
        </View>

        <View style={styles.secondTopTextContainer}>
          <Text style={styles.secondTopText}>
            Here you can easily check your recent quiz scores and can also check
            your data of ongoing quizes of your own interests
          </Text>
        </View>

        <View style={styles.smallCardContainer}>
          <View style={styles.cardOne}>
            <View style={styles.cardLeftIcon}>
              <Image
                style={styles.cardImage}
                source={require('../../../res/img/stats.png')}
              />
            </View>

            <View style={styles.cardCenterText}>
              <Text style={styles.centerText}>Check your quiz scores!</Text>
            </View>

            <View style={styles.cardRightButton}>
              <TouchableOpacity style={styles.rightButton}>
                <Image
                  style={styles.rightButtonImage}
                  source={require('../../../res/img/next.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardTwo}>
            <View style={styles.cardLeftIcon}>
              <Image
                style={styles.cardImage}
                source={require('../../../res/img/graph.png')}
              />
            </View>

            <View style={styles.cardCenterText}>
              <Text style={styles.centerText}>Check your quiz scores!</Text>
            </View>

            <View style={styles.cardRightButton}>
              <TouchableOpacity style={styles.rightButton}>
                <Image
                  style={styles.rightButtonImage}
                  source={require('../../../res/img/next.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(QuizResult);

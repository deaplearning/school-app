import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

// FIELS
import {Colors} from '../../Constant/color';
import styles from './style';

const {appColor} = Colors;

export default class Loader extends Component {
  static defaultProps = {
    loaderColor: '',
  };

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={appColor} />
      </View>
    );
  }
}

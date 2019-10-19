import React, {Component} from 'react';
import {Text, View, Image, ImageBackground, TextInput} from 'react-native';

// FILES
import Banner from '../../../assets/banners/background.png';
import Logo from '../../../assets/banners/logo.png';
import styles from './style';

// PACKAGES
import {Item, Picker} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Button} from 'galio-framework';

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      FullName: '',
      class: '',
      sections: '',
    };
  }

  on_singUp = () => {
    console.log('Full name', this.state.FullName);
    console.log('Classes', this.state.class);
    console.log('Section', this.state.sections);

    this.setState({
      FullName: '',
      sections: '',
      class: '',
    });
  };

  render() {
    return (
      <ImageBackground source={Banner} style={styles.container}>
        <View style={{alignSelf: 'center', flex: 0.5}}>
          <Image
            source={Logo}
            style={styles.LogoStyling}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.Text}>Enter Your Personal Information</Text>
        <TextInput
          onChangeText={e => {
            this.setState({FullName: e});
          }}
          placeholder="Full Name"
          borderless
          placeholderTextColor="#9a9a9a"
          keyboardType="numeric"
          style={styles.InputText}
          clearButtonMode="always"
          value={this.state.FullName}
        />
        <View style={{flex: 0.05}} />
        <Item
          picker
          style={{
            width: wp('77%'),
            height: hp('6%'),
            alignSelf: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 8,
            paddingLeft: 20,
          }}>
          <Picker
            placeholder="Select your Class"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            mode="dropdown"
            style={{width: undefined}}
            selectedValue={this.state.class}
            value={this.state.class}
            onValueChange={(e, itemIndex) => {
              this.setState({class: e});
            }}
            placeholder="Select your SIM">
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
        <View style={{flex: 0.05}} />
        <Item
          picker
          style={{
            width: wp('77%'),
            height: hp('6%'),
            alignSelf: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 8,
            color: '#8974f5',
            paddingLeft: 20,
          }}>
          <Picker
            placeholder="Select your Section"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            mode="dropdown"
            style={{width: undefined}}
            selectedValue={this.state.sections}
            value={this.state.sections}
            onValueChange={(e, itemIndex) => {
              this.setState({sections: e});
            }}>
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
        <View style={{flex: 0.05}} />
        <LinearGradient
          colors={['#c775b0', '#5058a6']}
          start={{x: 0.2, y: 0.2}}
          end={{x: 0.6, y: 0.1}}
          style={{
            width: wp(77),
            height: hp(6.5),
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          <Button
            onPress={this.on_singUp}
            color="transparent"
            style={{alignSelf: 'center'}}>
            Sign up
          </Button>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

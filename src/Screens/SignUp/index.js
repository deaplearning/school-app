import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

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
import {Input, Button} from 'galio-framework';

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
              <Text style={styles.inputText}>
                Enter Your Personal Information
              </Text>
              <View style={{flex: 0.1}} />
              <Input
                onChangeText={e => {
                  this.setState({FullName: e});
                }}
                placeholderTextColor="#9a9a9a"
                placeholder="Full Name"
                bgColor="#e3e6e4"
                borderless={true}
                keyboardType="numeric"
                style={{width: wp('85%'), height: hp('7%'), paddingLeft: 18}}
                clearButtonMode="always"
                value={this.state.FullName}
              />
              <View style={{flex: 0.05}} />
              <Item picker style={styles.picker}>
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
              <View style={{flex: 0.1}} />
              <Item picker style={styles.picker}>
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
              <View style={{flex: 0.16}} />
              <TouchableOpacity>
                <LinearGradient
                  colors={['#c775b0', '#5058a6']}
                  start={{x: 0.2, y: 0.2}}
                  end={{x: 0.6, y: 0.1}}
                  style={{
                    height: hp('7%'),
                    width: wp('85%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <Button
                    onPress={this.on_singUp}
                    color="transparent"
                    shadowless>
                    Sign up
                  </Button>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

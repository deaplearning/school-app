import React, {Component} from 'react';
import {Text, View, Picker, Image, ImageBackground} from 'react-native';

// FILES
import Banner from '../../../assets/banners/background.png';
import Logo from '../../../assets/banners/logo.png';
import styles from './style';

// PACKAGES
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
    console.log('FUll name', this.state.FullName);
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
        <View style={{alignSelf: 'center', flex: 0.6}}>
          <Image
            source={Logo}
            style={styles.LogoStyling}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.Text}>Enter Your Personal Information</Text>
        <Input
          onChangeText={e => {
            this.setState({FullName: e});
          }}
          placeholder="Full Name"
          borderless
          placeholderTextColor="#9a9a9a"
          style={styles.InputText}
          clearButtonMode="always"
          value={this.state.FullName}
        />
        <Picker
          selectedValue={this.state.class}
          style={styles.Picker}
          value={this.state.class}
          onValueChange={e => {
            this.setState({class: e});
          }}>
          <Picker.Item label="Class" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Bootstarp" value="bt" />
          <Picker.Item label="Python" value="py" />
        </Picker>
     
        <Picker
          selectedValue={this.state.sections}
          style={styles.Picker}
          value={this.state.sections}
          onValueChange={(e, itemIndex) => {
            this.setState({sections: e});
          }}>
          <Picker.Item label="Section" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Bootstarp" value="bt" />
          <Picker.Item label="Python" value="py" />
        </Picker>
        <Button
          onPress={this.on_singUp}
          style={styles.submitButton
            
          }
          capitalize
          size="small">
          Sign up
        </Button>
      </ImageBackground>
    );
  }
}

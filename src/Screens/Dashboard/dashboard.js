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

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner1.png';
import Logo from '../../../assets/banners/logo.png';

export default class Dashboard extends Component {
  state = {
    code: '',
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={Banner}>
        <ScrollView>
          <View style={styles.childContainer}>
            <View>
              <View
                style={{
                  width: wp('18%'),
                  height: hp('10%'),
                  backgroundColor: 'red',
                  borderRadius: 100,
                }}
              />
  
  <View style={{width: '80%', height: '20%', flexDirection: 'row'}}>
                <Image
                  source={Profile}
                  style={{width: 60, height: 60}}
                  resizeMode={'stretch'}
                />
                <View style={{flexDirection: 'column'}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: '5%',

                        color: "blue",
                        // fontFamily: 'LexendDeca-Regular',
                      }}>
                      {"Good Morning"}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        color: 'black',
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}>
                      Naveen 9,10
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{height: hp('50%'), backgroundColor: 'blue', width: 100}}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

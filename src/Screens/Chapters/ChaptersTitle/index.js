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
  ImageBackground,
} from 'react-native';

import Notification from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../Constant/color';
import LinearGradient from 'react-native-linear-gradient';

const {appblackColor, appFont, appColor} = Colors;

import Banner from '../../../../assets/banners/banner2.png';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Option 1',
          image:
            'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 1,
          title: 'Option 2',
          image:
            'https://img.icons8.com/color/70/000000/administrator-male.png',
        },
        {
          id: 2,
          title: 'Option 3',
          image: 'https://img.icons8.com/color/70/000000/filled-like.png',
        },
        {
          id: 3,
          title: 'Option 4',
          image: 'https://img.icons8.com/color/70/000000/facebook-like.png',
        },
        {
          id: 4,
          title: 'Option 5',
          image: 'https://img.icons8.com/color/70/000000/shutdown.png',
        },
        {
          id: 5,
          title: 'Option 6',
          image: 'https://img.icons8.com/color/70/000000/traffic-jam.png',
        },
        {
          id: 6,
          title: 'Option 7',
          image: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png',
        },
        {
          id: 8,
          title: 'Option 8',
          image: 'https://img.icons8.com/flat_round/70/000000/cow.png',
        },
        {
          id: 9,
          title: 'Option 9',
          image: 'https://img.icons8.com/color/70/000000/coworking.png',
        },
        {
          id: 9,
          title: 'Option 10',
          image: 'https://img.icons8.com/nolan/70/000000/job.png',
        },
      ],
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title);
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={Banner}>
        {/*  NAVBAR  */}
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
            <Notification
              name="keyboard-backspace"
              size={hp('4%')}
              color={appblackColor}
            />
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
            <Notification
              name="notifications"
              size={hp('4%')}
              color={appblackColor}
            />
          </TouchableOpacity>
        </View>

        <View style={{width: '80%', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: hp('3%'),
              fontFamily: appFont,
              marginTop: hp('4%'),
              marginBottom: hp('4%'),
              color: appColor,
            }}>
            Subject Name
          </Text>
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener(item.view);
                }}>
                
                  <Image style={styles.cardImage} source={{uri: item.image}} />

                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      bottom: 15,
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      top: 6,
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                {/* </LinearGradient> */}
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>
    );
  }
}

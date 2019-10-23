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
  Button,
  ImageBackground,
  Dimensions,
} from 'react-native';

// FILES
import {Colors} from '../../../Constant/color';
import styles from './style';
import Banner from '../../../../assets/banners/profilebanner.png';

// PACKAGES
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import BookMarkIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';

// CONSTANT
const {appColor, gray, appFont, appColor2} = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
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

export default class Profile extends Component {
  state = {
    isGrade: null,
    ProfileGrade: null,
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
    activeGrade: null,
    avatarSource: '',
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
          'https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 2,
        title: 'Option 3',
        image:
          'https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        title: 'Option 4',
        image:
          'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 4,
        title: 'Option 5',
        image:
          'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 5,
        title: 'Option 6',
        image:
          'https://images.pexels.com/photos/2081327/pexels-photo-2081327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 6,
        title: 'Option 7',
        image:
          'https://images.pexels.com/photos/264635/pexels-photo-264635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 8,
        title: 'Option 8',
        image:
          'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 9,
        title: 'Option 9',
        image:
          'https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 9,
        title: 'Option 10',
        image:
          'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  };

  changeAvatar = () => {
    let options = {};

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  _renderScrollViewContent = () => {
    const barWidth = Dimensions.get('screen').width - 250;
    const progressCustomStyles = {
      backgroundColor: appColor,
      borderColor: '#E9E8E8',
    };
    const {progress, activeGrade, avatarSource, data} = this.state;

    return (
      <View style={{width: '95%', alignSelf: 'center'}}>
        <ScrollView>
          <View
            style={{
              marginTop: hp('15%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'rgb(255,255,255)',
                borderRadius: 50,

                shadowColor: '#00000021',
                justifyContent: 'center',
                shadowOffset: {
                  width: 0,
                  height: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                shadowOpacity: 0.22,
                shadowRadius: 3,
                elevation: 3,
              }}
              onPress={() => this.changeAvatar()}>
              <Image
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
                // source={Banner}
                resizeMode="cover"
                style={{
                  flexDirection: 'row',
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  alignSelf: 'center',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 75,
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  shadowColor: '#00000021',
                  justifyContent: 'center',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  shadowOpacity: 1,
                  shadowRadius: 3,
                  elevation: 3,
                  backgroundColor: 'white',
                }}>
                <EditIcon
                  name="edit"
                  size={hp('2%')}
                  color={appColor}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: appColor,
                fontSize: 18,
                fontFamily: appFont,
              }}>
              Sarim
            </Text>
          </View>
          <View style={{justifyContent: 'space-around', height: hp('30%')}}>
            <LinearGradient
              colors={['#c775b0', '#5058a6']}
              start={{x: 0.2, y: 0.2}}
              end={{x: 0.6, y: 0.1}}
              style={{
                flexDirection: 'row',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                height: hp('10%'),
                alignSelf: 'center',
              }}>
              <View
                style={{
                  width: wp('30%'),
                  height: hp('7%'),
                  borderRightColor: 'white',
                  borderRightWidth: 0.5,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp('3%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  26
                </Text>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  Quiz Completed
                </Text>
              </View>
              <View
                style={{
                  width: wp('30%'),
                  height: hp('7%'),
                  borderRightColor: 'white',
                  borderRightWidth: 0.5,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp('3%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  26
                </Text>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  Quiz Completed
                </Text>
              </View>
              <View
                style={{
                  width: wp('30%'),
                  height: hp('7%'),
                  borderRightColor: 'white',
                  borderRightWidth: 0.5,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp('3%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  26
                </Text>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    color: 'white',
                    fontFamily: appFont,
                  }}>
                  Quiz Completed
                </Text>
              </View>
            </LinearGradient>

            <View
              style={{
                marginTop: hp('3%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: appFont, fontSize: hp('2%')}}>
                Saved Chapter Or Journey
              </Text>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: appFont,
                    fontSize: hp('2.5%'),
                    color: appColor2,
                  }}>
                  08
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={data}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card}>
                  <Image style={styles.cardImage} source={{uri: item.image}} />

                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      top: 6,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <BookMarkIcon
                      name="bookmark"
                      size={22}
                      color="white"
                      style={{marginRight: wp('2%')}}
                    />
                  </View>

                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      bottom: 15,
                    }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
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

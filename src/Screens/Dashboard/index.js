import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavBar} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner2.png';
import Logo from '../../../assets/banners/logo.png';
import {Colors} from '../../Constant/color';

// CONSTANT
const {appblackColor} = Colors;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loader: true,
      goTop: false,
      weatherName: '',
      slider1Ref: null,
      subjects: null,
    };
    setTimeout(() => {
      this.setState({loader: false});
    }, 3000);
  }

  componentDidMount() {
    // const { classId } = this.props.navigation.state.params;

    // fetch(`${API_URL}api/subjects/${classId}`)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     // this.setState({
    //     //   classes: responseJson
    //     // });
    //     console.log(responseJson, "responcse from Dashboard")
    //   })
    //   .catch(error => console.log(error));

    fetch(`https://deaplearning.com/admin/app/api/get/subjects/2`)
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        this.setState({subjects: response, loader: false});
      })
      .catch(error => console.log(error));

    this.renderWeather();
  }

  renderWeather = () => {
    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 12) {
      this.setState({weatherName: 'Good Morning'});
    } else if (hrs >= 12 && hrs <= 17) {
      this.setState({weatherName: 'Good Afternoon'});
    } else if (hrs >= 17 && hrs <= 24) {
      this.setState({weatherName: 'Good Evening'});
    }
  };

  render() {
    const {loader, weatherName, subjects} = this.state;


    return (
      <ImageBackground style={styles.container} source={Banner}>
        {!loader ? (
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
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
              <Notification
                name="notifications"
                size={hp('4%')}
                color={appblackColor}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                width: '80%',
                height: hp('20%'),
                flexDirection: 'row',
                marginLeft: wp('5%'),
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'white',
                  borderRadius: 40,

                  justifyContent: 'center',
                  shadowColor: '#00000021',
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
                resizeMode={'stretch'}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginLeft: '5%',
                    marginRight: '5%',
                    color: 'black',
                    fontFamily: 'LexendDeca-Regular',
                    fontSize: 16,
                  }}>
                  Naveen 9,10
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: '5%',
                    fontFamily: 'LexendDeca-Regular',
                  }}>
                  {weatherName}
                </Text>
              </View>
            </View>

            <View style={{marginLeft: wp('5%')}}>
              <Text
                style={{
                  fontFamily: 'LexendDeca-Regular',
                  color: '#c775b0',
                  fontSize: 18,
                }}>
                What will you learn Today?
              </Text>
            </View>
            <View
              style={{
                marginTop: hp('10%'),
                shadowColor: '#00000021',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.22,
                shadowRadius: 3,
                elevation: 3,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View style={{marginLeft: wp('5%'), marginTop: hp('5%')}}>
                <Text style={{fontFamily: 'LexendDeca-Regular', fontSize: 18}}>
                  Your Subjects
                </Text>
              </View>
              <FlatList
                style={styles.list}
                ref={ref => {
                  this.ListView_Ref = ref;
                }}
                contentContainerStyle={{flexGrow: 0}}
                data={subjects}
                horizontal={false}
                numColumns={1}
                keyExtractor={item => {
                  return item.id;
                }}
                renderItem={({item}) => {
                  let title = item.name;
                  let color_key = JSON.parse(item.color_key);

                  return (
                    <TouchableOpacity
                      style={[styles.card]}
                      onPress={() => this.props.navigation.navigate("ChaptersTitle")}>
                      <LinearGradient
                        colors={[color_key[0], color_key[1]]}
                        start={{x: 0.2, y: 0.2}}
                        end={{x: 0.6, y: 0.1}}
                        style={{
                          flexDirection: 'row',
                          width: '100%',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: 7,
                        }}>
                        <View style={styles.cardHeader}>
                          <Text style={styles.title}>{title}</Text>
                        </View>
                        <View>
                          <Image
                            style={styles.cardImage}
                            source={{
                              uri: `http://deaplearning.com/admin/app/public/img/subjects/${item.thumbnail}`,
                            }}
                            resizeMode={'contain'}
                          />
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </ImageBackground>
    );
  }
}

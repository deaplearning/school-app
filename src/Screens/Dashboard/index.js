import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';

// FILES
import styles from './style';
import Banner from '../../../assets/banners/banner2.png';
import Logo from '../../../assets/banners/logo.png';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loader: false,
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
        this.setState({subjects: response});
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
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
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
                // source={Logo}
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
                  let title;

                  title = item.name;

                  return (
                    <TouchableOpacity
                      style={[
                        {
                          backgroundColor: '#fcc79c',
                        },
                        styles.card,
                      ]}
                      onPress={() => this.props.navigation.openDrawer()}>
                      <View style={styles.cardHeader}>
                          {/* <LinearGradient
                            colors={['#c775b0', '#5058a6']}
                            start={{x: 0.2, y: 0.2}}
                            end={{x: 0.6, y: 0.1}}
                            style={{
                              shadowColor: '#00000021',
                              shadowOffset: {
                                width: 0,
                                height: 6,
                              },
                              width: "100%",
                              alignItems: 'center',
                              shadowOpacity: 0.37,
                              shadowRadius: 7.49,
                              elevation: 3,
                              justifyContent: 'center',
                              borderRadius: 5,
                            }}> */}
                    
                            <Text style={styles.title}>{title}</Text>
                          {/* </LinearGradient> */}
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
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

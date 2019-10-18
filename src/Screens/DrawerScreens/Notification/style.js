import {StyleSheet} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../../../Constant/color';

const {appFont, appColor} = Colors;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10000,
    marginTop: hp("13%")
  },

  image: {
    width: 80,
    height: 80,
    opacity: 0.2,
  },

  ImageContainer: {
    marginTop: 70,
    marginLeft: 270,
  },

  connectContainer: {
    marginTop: -50,
    marginLeft: 10,
  },

  notificationTitle: {
    fontSize: 25,
    color: appColor,
    fontWeight: 'bold',
    fontFamily: 'Nunito-ExtraBold',
  },

  bellIcon: {
    width: wp('30%'),
    height: hp('20%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultHeaderColor: {
    backgroundColor: "white"
  },
  titleStyle: {
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito-ExtraBold"
  }
});

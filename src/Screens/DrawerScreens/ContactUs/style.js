import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../../../Constant/color';

const {appFont, appColor} = Colors;

export default styles = StyleSheet.create({
  imageContainer: {
    marginTop: 50,
    marginLeft: 300,
  },

  container: {
    flex: 1,
  },

  contactText: {
    fontSize: hp('3.5%'),
    color: appColor,
    fontFamily: appFont,
    marginLeft: wp('4%'),
  },

  feedbackBtn: {
    backgroundColor: appColor,
    width: wp('20%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
    borderRadius: 20,
  },
  customCard: {
    backgroundColor: appColor,
  },
  feedbackBtnTxt: {
    lineHeight: hp('6%'),
    textAlign: 'center',
    fontSize: hp('2%'),
    color: "white",
    fontFamily: 'LexendDeca-Regular',

  },
  customCardText: {
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
  },
  feedbackContainer: {
    fontSize: hp('3%'),
    marginLeft: wp('4%'),
    fontFamily: 'Nunito-ExtraBold',
  },
  feedback: {fontFamily: appFont},
  defaultHeaderColor: {backgroundColor: 'white'},
});

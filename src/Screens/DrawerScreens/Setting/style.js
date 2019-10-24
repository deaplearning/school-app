import { StyleSheet } from "react-native";

// FILES
import { Colors } from "../../../Constant/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// COLORS
// CONSTANT
const { appColor, appFont, appblackColor } = Colors;

export default styles = StyleSheet.create({
  container: {width: '95%', alignSelf: 'center', justifyContent: 'center'}
, subContainer: {
  height: hp('90%'),
  alignSelf: 'center',
  justifyContent: 'space-around',
  alignItems: 'center',
},
cardContainer:
{
  backgroundColor: 'white',
  width: wp('90%'),
  height: hp('20%'),
  shadowColor: '#00000021',
  borderRadius: 5,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  justifyContent: 'space-evenly',
  elevation: 3,
},
cardListContainer: { flexDirection: 'row',
alignItems: 'center',
marginLeft: wp('3%'),},
cardListStyle:{
  flexDirection: 'row',
  alignItems: 'center',
  width: wp('80%'),
  alignSelf: 'center',
  justifyContent: 'space-between',
},
cardListTxt: {
  fontSize: hp('2%'),
  fontFamily: appFont,
  color: appblackColor,
}

});

import {Dimensions, StyleSheet} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//FILES
// import { Colors } from "../../constant/color";

// CONSTANT
const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle: {marginLeft: wp('2%'), alignSelf: 'center', flexDirection: 'row'},
  subContainer: {
    height: hp('90%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoStyling: {width: wp('40%'), height: hp('20%')},
  borderStyleBase: {
    width: 30,
    height: 30,
  },
  borderStyleHighLighted: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 1,
    borderColor: '#C1C1C1',
    backgroundColor: '#e3e6e4',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});

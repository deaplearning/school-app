import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  picker:{
    width: wp('85%'),
    height: hp('7%'),
    alignSelf: 'center',
    backgroundColor: '#e3e6e4',
    borderRadius: 8,
    paddingLeft: 18,
  },
  btnStyle: {marginLeft: wp('2%'), alignSelf: 'center', flexDirection: 'row'},
  childContainer: {
    height: hp('90%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoStyle: {width: wp('40%'), height: hp('20%')},
  inputContainer: {justifyContent: 'center', alignItems: 'center'},
  inputText: {fontSize: hp('3%'), color: '#c775b0'},
});

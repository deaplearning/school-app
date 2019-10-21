import {Dimensions, StyleSheet} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//FILES

export default styles = StyleSheet.create({
  container: {
    flex: 1,
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
  googleBtnContainer: {
    width: '85%',
    height: '8%',
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 3,
    alignItems: 'center',
  },
  googleBtnSubContainer: {width: 30, height: '6%', justifyContent: 'center'},
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: hp('5%'),
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '40%',
  },

  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    color: '#A2A2A2',
  },
  nextBtnSubContainer: {
    width: '100%',
    height: '100%',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    alignItems: 'center',
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 3,
    justifyContent: 'center',
    borderRadius: 5,
  },
  nextBtnContainer: {
    width: '85%',
    height: '18%',
    flexDirection: 'row',
  },
  nextBtnStyle: {fontSize: hp("2%"), color: "white"}
});

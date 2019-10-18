import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topHeader: {
    flexDirection: 'row',
  },
  topContainer: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('28%'),
    marginTop: hp('7%'),
    justifyContent: 'space-between',
  },

  topTextContainer: {
    width: wp('40%'),
    height: hp('20%'),
    marginLeft: wp('10%'),
    marginTop: hp('3%'),
  },

  topLeftText: {
    fontSize: hp('4.5%'),
    textAlign: 'center',
    color: '#00BCD4',
    fontWeight: 'bold',
  },

  sideImage: {
    width: wp('50%'),
    alignItems: 'center',
  },

  image: {
    width: wp('40%'),
    height: hp('25%'),
  },

  secondTopTextContainer: {
    width: wp('95%%'),
    height: hp('14%'),
  },
  secondTopText: {
    fontSize: hp('2%'),
    marginLeft: wp('7%'),
    color: '#898989',
  },

  smallCardContainer: {
    height: hp('25%'),
    width: wp('90%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardOne: {
    width: wp('85%'),
    height: hp('11%'),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 0.5,
    alignItems: 'center',
  },

  cardTwo: {
    width: wp('85%'),
    height: hp('11%'),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 0.5,
    alignItems: 'center',
  },

  cardLeftIcon: {
    width: wp('25%%'),
    height: hp('15%'),
    alignContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardCenterText: {
    width: wp('30%%'),
    height: hp('15%'),
    justifyContent: 'center',
  },

  cardRightButton: {
    width: wp('25%%'),
    height: hp('15%'),
    justifyContent: 'center',
  },

  cardImage: {
    width: wp('15%'),
    height: hp('8%'),
  },

  centerText: {
    fontSize: hp('2%'),
    color: '#7E7E7E',
  },

  rightButton: {
    justifyContent: 'center',
    width: wp('12%'),

    alignSelf: 'center',
    elevation: 2,
  },

  rightButtonImage: {
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: 30,
    elevation: 3,
    shadowColor: 'black',
  },
}));
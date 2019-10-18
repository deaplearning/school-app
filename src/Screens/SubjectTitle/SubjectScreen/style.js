import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

export default styles = StyleSheet.create({
  container: {
    marginTop: hp('15%'),
    width: wp('95%'),
    alignSelf: 'center',
  },
  list: {},
  listContainer: {
    alignItems: 'center',
  },
  

  customCard: {
    backgroundColor: 'orange',
  },
  customCardText: {
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
  },
  headerImageStyle: {backgroundColor: 'blue'},
  defaultHeaderColor: {backgroundColor: 'white'},
  titleStyle: {color: 'black', fontSize: 18, fontFamily: 'Nunito-ExtraBold'},
});

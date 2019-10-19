import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
  },

  Text: {
    flex: 0.1,
    alignSelf: 'center',
    fontSize: 20,
    color: '#8974f5',
  },

  Picker: {
    width: wp(77),
    height: hp(6.5),
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  
  },
  InputText: {
    width: wp(77),
    height: hp(6.5),
    color: '#9a9a9a',
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius :8,
    paddingLeft:20,
    fontSize:20

  },
  LogoStyling: {
    width: wp('40%'),
    height: hp('20%'),
    marginTop: 70,
  },
   submitButton:{
    width: wp(77),
    height: hp(6.5),
    alignSelf: 'center',
   
  

   },
   
});

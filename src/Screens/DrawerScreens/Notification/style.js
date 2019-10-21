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
    marginTop: hp("13%"),
    width: wp("93%"),
    alignSelf:"center",
  },

  
  bg:{
width:wp("100%"),
height:hp("100%")

  },
 card:{
   marginTop:10,
   alignSelf:"center",
   width: wp("90%"),
   height: hp("12%"),
   backgroundColor:"#f7e2e7",
   borderWidth:1,
   borderColor:"#fbcfcc"
  
 }
});

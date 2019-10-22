import {StyleSheet} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
      flex:1,
    },
    list: {
      paddingHorizontal: 5,
    },
    listContainer:{
      alignItems:'center'
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      borderRadius: 20,
      elevation: 3,
      borderRadius: 20,
      flexBasis: '42%',
      height: hp("27%"),
 
    },
    cardHeader: {
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardImage:{
      height: 70,
      width: 70,
      alignSelf:'center'
    },
    title:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
  });    
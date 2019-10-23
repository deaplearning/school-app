import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center',
    flexGrow: 0
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 3,
    marginVertical: 10,
    backgroundColor: 'transparent',
    flexBasis: '45%',
    marginHorizontal: 10,
    height: hp('30%'),
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    flex: 1,
    borderRadius: 20,
    color: 'white',
    marginLeft: wp("3%")
  },
});

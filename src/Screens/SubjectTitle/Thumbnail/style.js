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
    backgroundColor: 'white',
    // flexBasis: '42%',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardImage: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
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


  cardImage: {
    height: hp("6%"),
    width: wp("15%"),
    alignSelf: 'center',
    alignItems:"center",
    justifyContent : "center",
  },
  title: {
    fontSize: 12,
    alignSelf: 'center',
    color: '#696969',
  },
});

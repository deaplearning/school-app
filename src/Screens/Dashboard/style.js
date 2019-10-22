import {Dimensions, StyleSheet} from 'react-native';

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  btnStyle: {marginLeft: wp('2%'), alignSelf: 'center', flexDirection: 'row'},
  subContainer: {
    height: hp('90%'),
    alignItems: 'center',
    justifyContent: 'center',
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

  // for dashboard
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 3,
    marginVertical: 10,
    width: "80%",
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center"
  },
  cardHeader: {
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    marginRight: wp("3%")
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },

  cardImage: {
    height: 50,
    width: 50,
    flexDirection: "row",
    alignSelf: "center",
    marginRight: wp("5%")
  },
  title: {
    color: "white",
    fontSize: hp("2.5%"),
    fontFamily: "LexendDeca-Regular",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: wp("3%")
  },
  customCard: {
    backgroundColor: "red"
  },
  customCardText: {
    color: "white",
    fontSize: hp("1.5%")
  },
  defaultHeaderColor: { backgroundColor: "white" },
  titleStyle: { color: "black", fontSize: 18 },
});

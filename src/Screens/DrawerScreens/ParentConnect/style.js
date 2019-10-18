import { StyleSheet } from "react-native";
import { Colors } from "../../../Constant/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const { appColor, appFont } = Colors;

export default styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80
  },

  ImageContainer: {
    marginTop: hp("10%"),
    marginLeft: wp("60%")
  },

  backContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    marginTop: hp("10%"),
    alignItems: "center"
  },

  parentConatiner: {
    marginTop: hp("7%"),
    zIndex: 1000,
    width: wp("87%"),
    height: hp("5%"),
    fontFamily: "LexendDeca-Regular"
  },

  parentText: {
    fontSize: hp("3%"),
    fontFamily: "LexendDeca-Regular",
    width: wp("80%")
  },

  dotContainerOne: {},

  childText: {
    height: hp("5%"),
    color: "#898989",
    fontFamily: "LexendDeca-Regular",
    fontSize: hp("2.4%")
  },

  childContainer: {
    width: wp("70%"),
    flexWrap: "wrap"
  },

  number: {
    color: appColor,
    fontFamily: appFont,
    // fontWeight: "bold",
    marginRight: wp("30%"),
    width: wp("50%"),
    fontSize: hp("2.3%"),
    flexWrap: "wrap"
  },

  numberContainer: {},

  dotContainerOne: {
    marginRight: 0
  },

  dotContainerTow: {
    marginRight: 0
  },

  parentCodeContainer: {
    marginRight: 80,
    width: wp("50%"),
    flexWrap: "wrap"
  },

  parentCode: {
    color: "#898989",
    fontFamily: "LexendDeca-Regular",
    fontSize: hp("2.4%"),
    height: hp("5%")
  },

  buttonContainer: {
    marginTop: hp("15%")
  },

  touchText: {
    marginTop: 20,
    fontFamily: "LexendDeca-Regular",
    color: "#898989"
  },
  connectContainer: {
    marginTop: hp("-10%"),
    marginLeft: wp("-30%"),
    width: wp("55%"),
    height: hp("8%"),
    fontFamily: "LexendDeca-Regular"
  },

  connectTextOne: {
    fontSize: hp("4%"),
    color: appColor,
    fontWeight: "bold"
  },

  connectTextTwo: {
    color: "#898989",
    fontSize: hp("2%")
  },

  parentButton: {
    backgroundColor: "#00BCD4",
    width: wp("45%"),
    height: hp("6.5%"),
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 5
  },
  codeContainer: {
    flexDirection: "row",
    marginRight: wp("10%"),
    padding: 10,
    marginTop: 20
  },
  defaultHeaderColor: {
    backgroundColor: "white"
  },
});

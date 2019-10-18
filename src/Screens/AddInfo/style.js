import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Colors } from "../../Constant/color";

const { appColor, appFont } = Colors;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  headContainer: {
    flexWrap: "wrap",
    alignSelf: "center"
  },

  headText: {
    fontSize: hp("3.5%"),
    fontFamily: "Nunito-ExtraBold",
    color: appColor,
    textAlign: "center",
    fontWeight: "bold"
  },
  headDownText: {
    fontSize: hp("2%"),
    color: "#898989",
    textAlign: "center",
    fontFamily: "LexendDeca-Regular"
  },

  InputsContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: hp("-17%"),
    height: hp("10%")
  },
  pickerNew: {
    width: wp("65%"),
    height: hp("7%"),
    //backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#898989",
    marginTop: hp("2%"),
    padding: 10
  },

  pickerCon: {
    alignSelf: "center"
  },

  nameInput2: {
    width: wp("60%"),
    height: hp("9%"),

    marginTop: hp("2%")
  },

  buttonRegister: {
    backgroundColor: appColor,
    width: wp("30%"),
    height: hp("6%"),
    alignItems: "center",
    padding: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    alignSelf: "center"
  },

  registerText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: hp("4%")
  }
});

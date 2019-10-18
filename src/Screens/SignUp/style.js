import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  headContainer: {
    flexWrap: "wrap",
    alignSelf: "center",
    marginTop: hp("0%")
  },

  headText: {
    fontSize: hp("2.8%"),
    color: "black",
    padding: 10,
    textAlign: "center",
    fontFamily: "LexendDeca-Regular"
  },
  headDownText: {
    fontSize: 22,
    color: "#00BCD4",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Nunito-ExtraBold"
  },

  nameInput: {
    width: wp("85%"),
    height: hp("9%")
  },

  nameInput3: {
    width: wp("85%"),
    height: hp("9%"),
    marginTop: hp("1%")
  },

  InputsContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: hp("15%"),
    alignSelf: "center",
    position: "absolute",
    height: hp("40%")
  },

  buttonRegister: {
    borderRadius: 30,
    backgroundColor: "#00BCD4",
    width: wp("35%"),
    height: hp("6%"),
    alignItems: "center",
    padding: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 1,
    alignContent: "center",
    position: "absolute"
  },

  registerText: {
    fontSize: hp("2.6%"),
    color: "white",
    fontFamily: "LexendDeca-Regular"
  },

  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("90%"),
    position: "absolute",
    width: wp("90%"),
    alignSelf: "center"
  },

  leftContainer: {
    width: wp("46%"),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: wp("-4%")
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("42%"),
    alignItems: "center",
    marginRight: wp("-4")
  },

  loginText: {
    fontSize: hp("3%"),
    color: "#00BCD4",
    fontFamily: "LexendDeca-Regular"
  },
  textUnderline: {
    textDecorationLine: "underline",
    fontSize: hp("2%"),
    fontFamily: "LexendDeca-Regular"
  },

  buttonAndIndicator: {
    width: wp("40%"),
    height: hp("7%"),
    flexDirection: "column",
    flexWrap: "wrap",
    alignSelf: "center",
    alignContent: "center",
    marginTop: hp("55%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  buttonContainer: {
    alignSelf: "center",
    alignItems: "center"
  }
});

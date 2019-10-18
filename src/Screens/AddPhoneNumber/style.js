import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },

  headContainer: {
    marginBottom: hp("20%"),
    flexWrap: "wrap",
    alignSelf: "center",

    marginTop: hp("6%")
  },

  headText: {
    fontSize: hp("3%"),
    fontFamily: "Nunito-ExtraBold",
    color: "#00BCD4",
    padding: 10,
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
    //backgroundColor:"red",
    height: hp("10%"),
    
    // backgroundColor:"red"
  },
  pickerNew: {
    width: wp("65%"),
    height: hp("7%"),
    //backgroundColor: "red",
    alignSelf:"center",
    borderRadius:30,
    borderWidth:1,
    borderColor:"#898989",
    marginTop:hp("2%"),
    padding:10
  },

  pickerCon:{

    alignSelf:"center"
  },

  nameInput2: {
    width: wp("60%"),
    height: hp("9%"),

    marginTop: hp("2%")
  },

  buttonRegister: {
    borderRadius: 30,
    backgroundColor: "#00BCD4",
    width: wp("30%"),
    height: hp("6%"),
    alignItems: "center",
    padding: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 1
  },

  registerText: {
    fontSize: hp("3%"),
    color: "white"
  },

  loginText: {
    fontSize: hp("116%"),
    color: "#00BCD4"
  },
  textUnderline: {
    textDecorationLine: "underline"
  },

  otpContainer: {
    alignSelf: "center",
    marginTop: hp("6%")
  },

  otpText: {
    color: "#898989",
    fontFamily: "LexendDeca-Regular"
  },

  alreadyConatiner: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: hp("85%"),

    position: "absolute"
  },

  newAccountText: {
    color: "#898989",
    fontFamily: "LexendDeca-Regular"
  },

  registerTextTwo: {
    color: "#00BCD4",
    fontWeight: "bold",
    fontFamily: "LexendDeca-Regular"
  },

  buttonAndIndicator: {
    width: wp("30%"),
    height: hp("10%"),
    //backgroundColor: 'yellow',
    flexDirection: "column",
    flexWrap: "wrap",
    alignSelf: "center",
    alignContent: "center",
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    alignSelf: "center"
    //marginTop: hp('50%'),
    //position: 'absolute',
    //backgroundColor:"red"
  }
});

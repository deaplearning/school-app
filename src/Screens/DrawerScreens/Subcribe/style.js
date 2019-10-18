import { StyleSheet } from "react-native";

// PACKAGES
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

  import { Colors } from "../../../Constant/color";

const { appColor, gray, appFont } = Colors;
  

export default (styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("15%")
  },

  subsContainer: {
    marginTop: hp("20%"),
    marginRight: wp("53%")
  },

  subsText: {
    fontSize: hp("3.5%"),
    marginTop: hp("-20%"),
    color: "#00BCD4",
    fontFamily: "Nunito-ExtraBold",
  },

  imageCancel: {
    alignSelf: "center",
    width: wp("25%"),
    height: hp("25%"),
    resizeMode: "center"
  },

  onlineText: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    fontFamily: "Nunito-ExtraBold"
  },

  infoText: {
    marginBottom: hp("-40%")
  },

  callButton: {
    borderRadius: 30,
    backgroundColor: "#00BCD4",
    width: 150,
    height: 40,
    alignItems: "center",
    padding: 10,
    justifyContent: "center"
  },

  callText: {
    color: "white",
    fontSize: hp("2.5"),
    fontFamily: "Nunito-ExtraBold"
  },

  buttonContainer: {
    marginTop: hp("45%")
  },
  defaultHeaderColor: {
    backgroundColor: "white"
  },
  titleStyle: {
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito-ExtraBold"
  }
}));

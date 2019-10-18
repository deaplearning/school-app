import { Dimensions, StyleSheet } from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

//FILES
// import { Colors } from "../../constant/color";

// CONSTANT
const { width, height } = Dimensions.get("window");
// const { buttonColor } = colors;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp("10%"),
    alignItems: "center",
    justifyContent: "center"
  },
  btnStyle: { marginLeft: wp("2%"), alignSelf: "center" },

  borderStyleBase: {
    width: 30,
    height: 30
  },

  borderStyleHighLighted: {
    borderColor: "black"
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "black"
  },

  underlineStyleHighLighted: {
    borderColor: "black"
  }
});

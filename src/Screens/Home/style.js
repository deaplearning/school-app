import { StyleSheet, StatusBar } from "react-native";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// FILES
import { Colors } from "../../Constant/color";

// CONSTANT
const { appColor, appFont } = Colors;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: hp("15%")
  },
  list: {
    paddingHorizontal: 5
  },
  listContainer: {
    justifyContent: "space-around"
  },
  separator: {
    marginTop: 10
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 3
    },
    shadowOpacity: 2,
    shadowRadius: 8,
    marginVertical: 7,
    backgroundColor: "white",
    flexBasis: "30%",
    elevation: 3,
    marginHorizontal: 5,
    borderRadius: 30,
    width: 30
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  /******** card components **************/
  title: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: appColor,
    fontFamily: appFont
  },
  fill: {
    flex: 1
  }
});

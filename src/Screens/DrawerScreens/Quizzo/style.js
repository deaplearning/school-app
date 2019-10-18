import { StyleSheet, StatusBar, Platform, Dimensions } from "react-native";
// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// FILES
import { Colors } from "../../../Constant/color";

const { appColor2, appColor, appFont } = Colors;
const { height, width } = Dimensions.get("window");
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD"
};

export default styles = StyleSheet.create({
  container: {
    // height: hp("90%")
    flex: 1
  },
  listContainer: {
    alignItems: "center"
  },
  /******** card **************/
  card: {
    marginVertical: 6,
    flexBasis: "30%"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },

  cardImage: {
    height: 30,
    width: 30,
    alignSelf: "center"
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#696969"
  },

  StatusBarStyle: {
    backgroundColor: appColor2
  },
  userData: {
    fontFamily: "LexendDeca-Regular",
    fontSize: hp("2.5%"),
    color: "white"
  },
  stickyHeader: {
    height: hp("8%"),
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: appColor2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: STATUSBAR_HEIGHT,
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000
  },
  headerRight: {
    marginRight: wp("2%"),
    borderWidth: 1,
    borderColor: "white",
    height: hp("4%"),
    width: wp("28%"),
    borderRadius: 5,

    alignItems: "center"
  },
  contentContainer: {
    height: hp("10%"),
    backgroundColor: appColor2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  rankCard: {
    height: hp("19%"),
    width: "95%",
    marginTop: hp("2%"),
    alignSelf: "center",
    shadowColor: "#00000021",
    backgroundColor: appColor2,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  },
  rankText: {
    color: "white",
    fontSize: hp("2.6%"),
    fontFamily: "LexendDeca-Regular"
  },

  rankText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp("2.9%"),
    fontFamily: "LexendDeca-Regular"
  },

  rankContentContainer: {
    borderBottomWidth: 2,
    borderColor: "white",
    height: hp("5%"),
    justifyContent: "center"
  },
  rankCardStyle: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    lineHeight: 80
  },
  playCardContainer: {
    width: "95%",
    alignSelf: "center",
    height: hp("20%"),
    shadowColor: "#00000021",
    backgroundColor: "white",
    marginTop: hp("3%"),

    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  },

  mainviewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    position: "absolute",
    // flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    height: 80,
    justifyContent: "center"
  },
  bottomButtons: {
    alignItems: "center",
    backgroundColor: appColor2,
    height: hp("7%"),
    width: wp("85%"),
    alignSelf: "center",
    
  },
  footerText: {
    color: "white",
    alignItems: "center",
    fontSize: hp("3%"),
    lineHeight: hp("7%"),
    fontFamily: "Nunito-ExtraBold"
  }
});

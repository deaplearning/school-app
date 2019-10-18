import { StyleSheet } from "react-native";

// FILES
import { Colors } from "../../../Constant/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// COLORS
// CONSTANT
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const { appColor, appFont } = Colors;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: HEADER_MAX_HEIGHT,
    fontFamily: "Nunito-ExtraBold"
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
    color: appColor
  },
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: appColor,
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  headerTitle: {
    fontSize: 18,
    color: "white"
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  defaultHeaderColor: { backgroundColor: "white" },
  titleStyle: { color: "black", fontSize: 18, fontFamily: "Nunito-ExtraBold" },

  // Edit Profile Styling

  inputContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon: { marginBottom: hp("3%") },

  callButton: {
    borderRadius: 30,
    backgroundColor: "#00BCD4",
    width: 150,
    height: 40,
    alignItems: "center",
    padding: 10,
    alignSelf: "center",
    marginTop: hp("5%")
  },
  inputStyle: {
    width: wp("80%"),
    flexDirection: "row",
    fontFamily: appFont,
    color: "black"
  },
  callText: {
    color: "white",
    fontSize: hp("2"),
    // fontFamily: "Nunito-ExtraBold"
    fontFamily: appFont
  }
});

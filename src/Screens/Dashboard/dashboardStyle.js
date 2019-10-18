import { StyleSheet, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Colors } from "../../Constant/color";

const { appColor } = Colors;

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD"
};

export default styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // flex: 1,
    width: '100%', height: '100%',
    justifyContent: "space-between"
  },
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
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    alignItems: "center"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    marginLeft: hp("5%")
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },

  cardImage: {
    height: 40,
    width: 40,
    flexDirection: "row",
    marginLeft: hp("5%"),
    alignSelf: "center"
  },
  title: {
    fontFamily: "LexendDeca-Regular",
    color: "white",
    fontSize: hp("2%"),
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: hp("5%")
  },
  customCard: {
    backgroundColor: appColor
  },
  customCardText: {
    color: "white",
    fontFamily: "LexendDeca-Regular",
    fontSize: hp("1.5%")
  },
  defaultHeaderColor: { backgroundColor: "white" },
  titleStyle: { color: "black", fontSize: 18, fontFamily: "Nunito-ExtraBold" }
});

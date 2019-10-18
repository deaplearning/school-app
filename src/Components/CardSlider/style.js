import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  container: {
    marginTop: hp("15%")
  },
  listContainer: {},
  /******** card **************/
  card: {
    shadowColor: "#00000021",

    shadowOffset: {
      width: 0,
      height: 3,
      justifyContent: "center",
      alignItems: "center"
    },
    shadowOpacity: 0.22,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 10,
    backgroundColor: "white",
    flexBasis: "50%",
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  cardHeader: {
    // paddingVertical: 33,
    // paddingHorizontal: 28,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },

  cardImage: {
    height: hp("6%"),
    width: wp("15%"),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 14,
    alignSelf: "center",
    color: "#696969",
    fontWeight: "bold",
    fontFamily: "LexendDeca-Regular"
  }
});

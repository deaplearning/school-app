import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  customCard: {
    backgroundColor: "orange"
  },
  customCardText: {
    color: "white",
    fontFamily: "LexendDeca-Regular"
  },
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
  cardImage: {
    flex: 1,
    justifyContent: "center"
  }
});

import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD"
};
const IMAGE_SIZE = 200;

export default styles = StyleSheet.create({
  listContainer: {
    alignItems: "center"
  },
  /******** card **************/
  card: {
    marginVertical: 10,
    flexBasis: "30%",
    marginHorizontal: 10,
    borderRadius: 20
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
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
    height: 30,
    width: 30,
    alignSelf: "center"
  },
  title: {
    fontSize: 12,
    flex: 1,
    alignSelf: "center",
    color: "#696969"
  },

  panel: {
    height: 600,
    padding: 20,
    backgroundColor: "#f7f5eee8"
  },
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10
  },

  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#318bfb",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  photo: {
    width: "100%",
    height: 225,
    marginTop: 30
  },
  map: {
    height: "100%",
    width: "100%"
  },

  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
  },
  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: "#f7f5eee8"
  },
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  }
});

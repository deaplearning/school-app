import React from "react";

import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// PACKAGES
import BottomSheet from "reanimated-bottom-sheet";

// FILES
import styles from "./style";
import { Colors } from "../../../Constant/color";
import Dashboard from "../../Dashboard";

const { appColor , appFont} = Colors;

export default class ShareApp extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "WhatsApp",
        image:
          "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-512.png"
      },
      {
        id: 1,
        title: "Gmail",
        image:
          "https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"
      },
      {
        id: 2,
        title: "Bluetooth",
        image: "http://aux.iconspalace.com/uploads/20599860882095427509.png"
      },
      {
        id: 3,
        title: "Copy",
        image: "https://img.icons8.com/material-outlined/32/000000/copy.png"
      },
      {
        id: 4,
        title: "Massenger",
        image: "https://img.icons8.com/color/48/000000/facebook-messenger.png"
      },
      {
        id: 5,
        title: "SnapChat",
        image: "https://img.icons8.com/plasticine/100/000000/snapchat.png"
      },
      {
        id: 6,
        title: "Copy to...",
        image: "https://img.icons8.com/color/48/000000/folder-invoices.png"
      },
      {
        id: 7,
        title: "Save to Drive",
        image: "https://img.icons8.com/color/48/000000/google-drive.png"
      }
    ]
  };

  renderInner = () => (
    <View>
      <View
        style={{
          height: hp("30%"),
          justifyContent: "space-around",
          borderBottomColor: 1,
          borderBottomWidth: 1,
          marginLeft: wp("3%")
        }}
      >
        <Image
          style={{ alignSelf: "center", width: 100, height: 100 }}
          source={{
            uri: "https://img.icons8.com/color/48/000000/google-drive.png"
          }}
        />
        <Text style={{ fontSize: hp("3%"), fontFamily: "Nunito-ExtraBold" }}>
          DEAP LEARNING APP
        </Text>
        <Text
          style={{
            fontSize: hp("2%"),
            color: "lightgray",
            fontFamily: appFont
          }}
        >
          Share the love of Learning
        </Text>
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={this.state.data}
        horizontal={false}
        numColumns={3}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <View style={{ justifyContent: "center" }}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardHeader}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[500, 50]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
          onCloseEnd={() => this.props.navigation.goBack()}
          // onCloseStart={() => this.props.navigation.navigate("Dashboard")}
        />
      </View>
    );
  }
}

const IMAGE_SIZE = 200;

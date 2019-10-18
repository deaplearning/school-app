import React, { Component } from 'react';
import {
    Image, ScrollView, SafeAreaView,
    StatusBar, TouchableOpacity, View, FlatList,
    ActivityIndicator,
} from 'react-native';


import Video from 'react-native-video';
import {
    Title, Footer, FooterTab, Container,
    Header, Content, Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Body, Right, List, ListItem, Picker, Form, Item, Textarea,
} from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//Packages
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Reinput from 'reinput';

import ImagePicker from 'react-native-image-picker';
import EditIcon from "react-native-vector-icons/MaterialIcons";
//import ImagePicker from 'react-native-image-crop-picker';



//import { type } from 'os';


export default class ChooseImageScreen extends Component {


    state = {
        isGrade: null,
        ProfileGrade: null,
        progress: 20,
        progressWithOnComplete: 0,
        progressCustomized: 0,
        activeGrade: null,
        avatarSource: ""
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    toggleCheckbox(item) {
        const currentItm = item;
        let items = [];
        const modidyCheck = !item.checked
            ? (item.checked = true)
            : (item.checked = false);

        ProfileGrade.map((v, i) => {
            v.checked == true ? items.push(v.name) : null;
        });

        this.setState({ ProfileGrade, activeGrade: items.pop() });
    }

    changeAvatar = () => {
        let options = {};

        ImagePicker.showImagePicker(options, response => {
            console.log("Response = ", response);

            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
                console.log("User tapped custom button: ", response.customButton);
            } else {
                // You can also display the image using data:
                const source = { uri: "data:image/jpeg;base64," + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    };

    takePics = () => {
        ImagePicker.openPicker({
          width: 200,
          height: 200, compressImageMaxHeight: 400,
          compressImageMaxWidth: 400, cropping: true, multiple: true
        })
          .then(response => {
            let tempArray = []
            console.log("responseimage-------" + response)
            this.setState({ ImageSource: response })
            console.log("responseimagearray" + this.state.ImageSource)
            response.forEach((item) => {
              let image = {
                uri: item.path,
                // width: item.width,
                // height: item.height,
              }
              console.log("imagpath==========" + image)
              tempArray.push(image)
              this.setState({ ImageSourceviewarray: tempArray })
              // console.log('savedimageuri====='+item.path);
    
              console.log("imagpath==========" + image)
            })
    
          })
    
      }






    render() {

        const { progress, activeGrade, avatarSource,avatarSources } = this.state;


        return (
            <Container>
                <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
                    <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('AdDetailScreen')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ width: wp("35%"),fontSize:hp("2%") }}>Choose Photos</Title>
                    </Body>
                    <Right>

                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>

                <Content style={{ alignSelf: "center" }}>

                    <View style={{ alignSelf: "center", alignItems: "center", justifyContent: "space-between", height: hp("28%") }}>
                        <Image style={{ width: wp("20%"), height: hp("20%"), resizeMode: "contain" }} source={require('../../../../../assets/choose.png')} ></Image>
                        <Button onPress={() => this.changeAvatar()} rounded style={{
                            width: wp("40%"),
                            height: hp("6%"), backgroundColor: "#4E93FE", justifyContent: "space-evenly"
                        }}>
                            <Text style={{ fontFamily: "LexendDeca-Regular", fontSize: hp("1.5%") }}>
                                Choose Photos
                           </Text>
                            <EditIcon
                                name="edit"
                                size={hp("2%")}
                                color="white"
                                style={{ alignSelf: "center", }}
                            />
                        </Button>
                    </View>

                    <View style={{
                        width: wp("95%"), height: hp("40%"), alignSelf: "center",
                        flexWrap: "wrap", flexDirection: "row",
                        marginTop: hp("5%"), justifyContent: "space-evenly"
                    }}>
                        <Image
                            source={avatarSource}
                            resizeMode="cover"
                            style={{
                                flexDirection: "row",
                                width: wp("30%"),
                                height: hp("20%"),
                                borderRadius: 0,
                                alignSelf: "center"
                            }}
                        />


                        <Image
                            source={avatarSource}
                            resizeMode="cover"
                            style={{
                                flexDirection: "row",
                                width: wp("30%"),
                                height: hp("20%"),
                                borderRadius: 0,
                                alignSelf: "center"
                            }}
                        />
                        <Image
                            source={avatarSource}
                            resizeMode="cover"
                            style={{
                                flexDirection: "row",
                                width: wp("30%"),
                                height: hp("20%"),
                                borderRadius: 0,
                                alignSelf: "center"
                            }}
                        />


                        <Image
                            source={avatarSource}
                            resizeMode="cover"
                            style={{
                                flexDirection: "row",
                                width: wp("30%"),
                                height: hp("20%"),
                                borderRadius: 0,
                                alignSelf: "center"
                            }}
                        />
                        <Image
                            source={avatarSource}
                            resizeMode="cover"
                            style={{
                                flexDirection: "row",
                                width: wp("30%"),
                                height: hp("20%"),
                                borderRadius: 0,
                                alignSelf: "center"
                            }}
                        />




                    </View>


                </Content>


                <Footer style={{ height: hp("5%") }} >
                    <FooterTab style={{ backgroundColor: "#4E93FE" }}>
                        <Button>
                            <Text style={{
                                fontFamily: "LexendDeca-Regular",
                                fontSize: hp("2.3%"), color: "white"
                            }}>Post Ad</Text>
                        </Button>

                    </FooterTab>
                </Footer>

            </Container>

        );
    }

}

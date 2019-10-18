import React, { Component } from 'react';

import {
  Image, ScrollView, SafeAreaView,
  StatusBar, TouchableOpacity, View, FlatList,
  ActivityIndicator, Linking
} from 'react-native';

import {
  Title, Footer, FooterTab, Container,
  Header, Content, Card, CardItem, Thumbnail, Text, Button,
  Icon, Left, Body, Right,Form
} from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//Packages
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Toast, { DURATION } from 'react-native-easy-toast'

//import { type } from 'os';




export default class DetailScreen extends Component {

  makeCall = (number) => {
    const args = {
      number: number, // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    call(args).catch(console.error)
  }

  // static navigationOptions = {

  //   title: 'Details',
  //   headerRight: <View />

  // }

  render() {
    return (
      <Container>
        <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
          <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right>

            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>


        <Content>
          <Toast ref="toast" />
          <TouchableOpacity  >
            <Card style={{ width: "100%" }}
            //Card 1
            >
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://img.icons8.com/bubbles/100/000000/salary-male.png' }} />
                  <Body>
                    <Text>RS 1,500</Text>
                    <Text note>Used 9th Sindh Board class course</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{ uri: 'https://apollo-singapore.akamaized.net/v1/files/0fip14l3n1zz2-PK/image;s=1080x1080' }} style={{ height: 200, width: "100%", flex: 1 }} />
                  <Text>
                    Selling my used books course of class 9th sindh board. In very nice condition.
                  </Text>



                  <View style={{flexDirection:"row", width:wp("90%"), justifyContent:"space-between", marginTop:hp("3%")}}>
                  <Text>
                    Author Name:
                  </Text>
                  <Text>
                    Paulo Coelho
                   </Text>
                  </View>

                  <View style={{flexDirection:"row", width:wp("90%"), justifyContent:"space-between"}}>
                  <Text>
                    Book Title:
                  </Text>
                  <Text>
                    Computer Science for Beginners
                   </Text>
                  </View>

                  <View style={{flexDirection:"row", width:wp("90%"), justifyContent:"space-between"}}>
                  <Text>
                    Category:
                  </Text>
                  <Text>
                    Academics
                   </Text>
                  </View>

                  <View style={{flexDirection:"row", width:wp("90%"), justifyContent:"space-between"}}>
                  <Text>
                    Subject:
                  </Text>
                  <Text>
                    Science 
                   </Text>
                  </View>


                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button onPress={() => { this.refs.toast.show('Added to favourite'); }} transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="star" />
                    <Text>Add to favourite</Text>

                  </Button>
                </Left>
              </CardItem>
            </Card>
          </TouchableOpacity>

        </Content>

        <Footer  >
          <FooterTab style={{ backgroundColor: "#4E93FE" }}>

            <Button vertical onPress={() => {
              Linking.openURL(`sms:03172142662?addresses=&body=Hi there, want to inquire about your ad posted on books corner.`);
            }}>
              <Icon name="chatboxes" />
              <Text style={{ color: "white" }}>SMS</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="chatboxes" />
              <Text style={{ color: "white" }}>Chat</Text>
            </Button>
            <Button vertical onPress={() => { Linking.openURL('tel:03172142662'); }}>
              <Icon name="keypad" />
              <Text style={{ color: "white" }}>Call</Text>
            </Button>
            {/* <Button vertical>
              <Icon name="star-half" />
              <Text style={{ color: "white" }}>Favourite</Text>
            </Button> */}
          </FooterTab>
        </Footer>
        <Toast ref="toast" />
      </Container>
    );
  }
}

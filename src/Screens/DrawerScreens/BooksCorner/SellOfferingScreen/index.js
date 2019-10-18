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
    Icon, Left, Body, Right, List, ListItem
} from 'native-base';

import { createAppContainer } from 'react-navigation';


//Packages
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

//import { type } from 'os';


export default class SellOfferingScreen extends Component {

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
                        <Title style={{width:wp("55%"),fontSize:hp("2")}}>What Are You Offering ?</Title>
                    </Body>
                    <Right>

                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>

                <Content>

                <View style={{ marginTop: hp("3%"), flex: 1, flexDirection: "row", justifyContent: "center", padding: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AdDetailScreen')} >

                <Card style={{ width: wp("30%"), height: hp("15%") }}>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/ec.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("1.8%")}}>Economics</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>

              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity >
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/bio.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}}>Biology</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/chem.png')} />
                    <Text>Chemistry</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", padding: 20 }}>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/comp.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}}>Science</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/eng.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}}>English</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/maths.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}}>Maths</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", padding: 20 }}>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/phy.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}}>Physics</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/urdu.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("1.8%")}}>Miscellaneous</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              <Card style={{ width: wp("30%"), height: hp("15%") }}>
                <TouchableOpacity>
                  <CardItem style={{
                    flex: 1,
                    flexDirection: 'column'
                  }}>
                    <Thumbnail square source={require('../../../../../assets/chem.png')} />
                    <Text style={{fontFamily:"LexendDeca-Regular", fontSize:hp("2%")}} >Chemistry</Text>
                  </CardItem>
                </TouchableOpacity>
              </Card>

            </View>


          {/* <List>
            <ListItem onPress={() => this.props.navigation.navigate('HomeScreen')} 
            style={{flexDirection:"row",justifyContent:"space-between"}} >
              <Text>Science</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Biology</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Computer Science</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Maths</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Chemistry</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Urdu</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>Physics</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
            <ListItem style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>English</Text>
              <Right>
              <Icon name="arrow-forward"></Icon>
              </Right>
            </ListItem>
           
          </List> */}
        </Content>

            </Container>

        );
    }

}
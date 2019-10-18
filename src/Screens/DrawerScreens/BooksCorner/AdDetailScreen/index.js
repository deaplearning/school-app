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
    Icon, Left, Body, Right, List,ListItem,Picker,Form,Item, Textarea,
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


//import { type } from 'os';


export default class AdDetailScreen extends Component {

  

    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value= string) {
        this.setState({
          selected2: value
        });
      }

    render() {

        return (
            <Container>
            <Header style={{ marginTop: hp("0%"), backgroundColor: "#4E93FE" }}>
            <StatusBar barStyle="light-content" backgroundColor="#4E93FE" />

            <Left>
                <Button transparent  onPress={() => this.props.navigation.navigate('SellOfferingScreen')}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title style={{width:wp("55%")}}>Include Some Details</Title>
            </Body>
            <Right>

                <Button transparent>
                    <Icon name='more' />
                </Button>
            </Right>
        </Header>
                
                <Content style={{alignSelf:"center"}}>

                <Reinput
            underlineColor="#898989"
            labelActiveColor="#4E93FE"
            labelColor="#898989"
            underlineActiveColor="#4E93FE"
            label="Book Title*"
            style={{ width: wp('85%'),
            height: hp('9%'),marginTop:"5%"}}
          />
              <Reinput
            underlineColor="#898989"
            labelActiveColor="#4E93FE"
            labelColor="#898989"
            underlineActiveColor="#4E93FE"
            label="Author Name*"
            style={{ width: wp('85%'),
            height: hp('9%'),marginTop:"0%"}}
          />

<Reinput
            underlineColor="#898989"
            labelActiveColor="#4E93FE"
            labelColor="#898989"
            underlineActiveColor="#4E93FE"
            label="Selling Price*"
            keyboardType="numeric"
            style={{ width: wp('85%'),
            height: hp('9%'),marginTop:"0%",}}
          />
        
        
        <View style={{width:wp("25%"), height:hp("5%"), backgroundColor:"#4E93FE", 
alignSelf:"center",marginRight:wp("60%"),borderRadius:60       }}>

            <Text style={{alignSelf:"center",padding:5,color:"white"}}>Grade</Text>
          </View>
        <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Grade"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="1st" value="key0" />
                <Picker.Item label="2nd" value="key1" />
                <Picker.Item label="3rd" value="key2" />
                <Picker.Item label="4th" value="key3" />
                <Picker.Item label="5th" value="key4" />
                <Picker.Item label="6th" value="key0" />
                <Picker.Item label="7th" value="key1" />
                <Picker.Item label="8th" value="key2" />
                <Picker.Item label="9th" value="key3" />
                <Picker.Item label="10" value="key4" />
                <Picker.Item label="11th" value="key3" />
                <Picker.Item label="12th" value="key4" />
              </Picker>
            </Item>
          </Form>
        
        
          <View style={{width:wp("25%"), height:hp("5%"),marginTop:hp("2%"),
           backgroundColor:"#4E93FE", 
alignSelf:"center",marginRight:wp("60%"),borderRadius:60       }}>

            <Text style={{alignSelf:"center",padding:5,color:"white"}}>Condition</Text>
          </View>
        
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Condition"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="New" value="key0" />
                <Picker.Item label="Fair" value="key1" />
                <Picker.Item label="Used" value="key2" />
                <Picker.Item label="Average" value="key3" />
                <Picker.Item label="Below Average" value="key4" />
              </Picker>
            </Item>
          </Form>
            
        
          <View style={{width:wp("25%"), height:hp("5%"), backgroundColor:"#4E93FE", 
alignSelf:"center",marginRight:wp("60%"),borderRadius:60,marginTop:hp("2%"),       }}>

            <Text style={{alignSelf:"center",padding:5,color:"white"}}>Subject</Text>
          </View>
        <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Condition"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="English" value="key0" />
                <Picker.Item label="Urdu" value="key1" />
                <Picker.Item label="Maths" value="key2" />
                <Picker.Item label="Physcis" value="key3" />
                <Picker.Item label="Chemistry" value="key4" />
                <Picker.Item label="Biology" value="key5" />
                <Picker.Item label="Economics" value="key6" />
                
              </Picker>
            </Item>
          </Form>

          <View style={{width:wp("25%"), height:hp("5%"),  
alignSelf:"center",     }}>

            <Text style={{alignSelf:"center",padding:5}}>OR</Text>
          </View>


          <View style={{width:wp("25%"), height:hp("5%"), backgroundColor:"#4E93FE", 
alignSelf:"center",marginRight:wp("60%"),borderRadius:60       }}>

            <Text style={{alignSelf:"center",padding:5,color:"white"}}>Category</Text>
          </View>

          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Condition"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Novel" value="key0" />
                <Picker.Item label="Sci-Fi" value="key1" />
                <Picker.Item label="Crime" value="key2" />
                <Picker.Item label="Horror" value="key3" />
                <Picker.Item label="Biography" value="key4" />
                <Picker.Item label="Suspense" value="key5" />
                <Picker.Item label="Fairytale" value="key6" />
                <Picker.Item label="Mysterys" value="key7" />

                
              </Picker>
            </Item>
          </Form>
            
          <Textarea style={{width:wp("80%"), marginTop:hp("5%"), alignSelf:"center"}} 
          rowSpan={5} bordered placeholder="Describe what are you selling*" />
        </Content>


        <Footer style={{height:hp("5%")}} >
          <FooterTab style={{backgroundColor:"#4E93FE"}}>
            <Button onPress={() => this.props.navigation.navigate('ChooseImageScreen')}>
              <Text style={{fontFamily:"LexendDeca-Regular",
               fontSize:hp("2.3%"),color:"white"}}>Next</Text>
            </Button>
            
          </FooterTab>
        </Footer>

            </Container>

        );
    }

}

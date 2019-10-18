import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
//import {Constants} from 'expo';
import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyC19rcvUKzXLetblNTQikO6w2JAwZZQGCc",
//     authDomain: "book-corner-chat.firebaseapp.com",
//     databaseURL: "https://book-corner-chat.firebaseio.com",
//     projectId: "book-corner-chat",
//     storageBucket: "",
//     messagingSenderId: "328394779545",
//     appId: "1:328394779545:web:23317db5c8831a0a204108",
//     measurementId: "G-JP9YJ6SF7G"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //Packages
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      messages: []
    }

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    // firebase
    //   .database()
    //   .ref()
    //   .child("messages")
    //   .once("value", snapshot => {
    //     const data = snapshot.val()
    //     if (snapshot.val()) {
    //       const initMessages = [];
    //       Object
    //         .keys(data)
    //         .forEach(message => initMessages.push(data[message]));
    //       this.setState({
    //         messages: initMessages
    //       })
    //     }
    //   });

    // firebase
    //   .database()
    //   .ref()
    //   .child("messages")
    //   .on("child_added", snapshot => {
    //     const data = snapshot.val();
    //     if (data) {
    //       this.setState(prevState => ({
    //         messages: [data, ...prevState.messages]
    //       }))
    //     }
    //   })

  }

  // addItem () {
  //   if (!this.state.message) return;

  //   const newMessage = firebase.database().ref()
  //                         .child("messages")
  //                         .push();
  //   newMessage.set(this.state.message, () => this.setState({message: ''}))
  // }

  render() {
    return (
      <View style={styles.container}>
      
        <FlatList   data={this.state.messages.reverse()}
          renderItem={
            ({item}) => 
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
          }
          />
            <View style={styles.msgBox}>
          <TextInput style={{backgroundColor:"#fff"}} placeholder='Enter your message'
            value={this.state.message}
            onChangeText={(text) => this.setState({message: text})}
            style={styles.txtInput}/>
          <Button title="Send"  onPress={this.addItem}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // marginTop: Constants.statusBarHeight
  },
  msgBox: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff'
  },
  txtInput: {
    flex: 1
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    fontSize: 20,
    padding: 10
  }
});
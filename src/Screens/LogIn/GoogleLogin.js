import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Button } from "react-native";
import { GoogleSignin, statusCodes ,GoogleSigninButton } from "react-native-google-signin";


export default class GoogleLogin extends Component {
 async componentDidMount() {
   this._configureGoogleSignIn();
 }
 _configureGoogleSignIn() {
   GoogleSignin.configure({
     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
     webClientId:
       "221366251240-3bb48v2flrntb3hagriivopj5n0v1pms.apps.googleusercontent.com" , //Replace with your own client id
     offlineAccess: true,
     hostedDomain: "",
     loginHint: "",
     forceConsentPrompt: true,
     accountName: "",
     iosClientId:
       "XXXXXX-krv1hjXXXXXXp51pisuc1104q5XXXXXXe.apps.googleusercontent.com"
   });
 }
 _signIn = async () => {
   try {
     await GoogleSignin.hasPlayServices();
     const userInfo = await GoogleSignin.signIn();
     await GoogleSignin.revokeAccess();
     console.log(userInfo)
     Alert.alert(userInfo.user.name)
     console.log(userInfo.user.id)
     console.log(userInfo.user.email)
     console.log(userInfo.user.photo) 
   } catch (error) {
     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
       // sign in was cancelled
       Alert.alert("cancelled");
     } else if (error.code === statusCodes.IN_PROGRESS) {
       // operation in progress already
       Alert.alert("in progress");
     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
       Alert.alert("play services not available or outdated");
     } else {
       console.log("Something went wrong:", error.toString());
       Alert.alert("Something went wrong", error.toString());
       this.setState({
         error
       });
     }
   }
 };
 render() {
   return (
     <View style={styles.container}>
       {/* <Button style={styles.welcome} onPress={this._signIn}
       
      title="Google-signin" 
     /> */}
      <GoogleSigninButton
    style={{ width: 142, height: 48 }}
    onPress={this._signIn}
    />
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   
 },
 welcome: {
   fontSize: 20,
   textAlign: "center",
   margin: 10
   
 },
 instructions: {
   textAlign: "center",
   color: "#333333",
   marginBottom: 5
 }
});
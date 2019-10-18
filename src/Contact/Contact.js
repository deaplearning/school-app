import React,{Component} from 'react';
import { Text,View,StyleSheet} from 'react-native';
import CardComp from './contactCard'


class Contact extends Component {
   
    render() {
        return (
            <View  style={styles.container} >
                <CardComp/>
                <CardComp/>
            </View>
        );
    }
}

export default Contact;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    }
})
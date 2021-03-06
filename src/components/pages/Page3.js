import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../authentication/Header'

export default class Page3 extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View>
            <Header />
            <View style = {styles.container}>
                <Text style = {styles.title}> Page 3 </Text>
            </View>
        </View>
              
      );
  }
}

let styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor: 'white',
        flexDirection: 'row',
     },
     title:{
      fontSize:18
     },     
});
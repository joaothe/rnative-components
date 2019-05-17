import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}
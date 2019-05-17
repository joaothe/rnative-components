import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

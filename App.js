import React, {Component} from 'react'
import {Platform, StyleSheet, View, ScrollView} from 'react-native'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          aqui viriam todas view box....
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1: {
    backgroundColor: 'blue',
    height: 250
  },
  box2: {
    backgroundColor: 'green',
    height: 250
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250
  },
  box4: {
    backgroundColor: 'red',
    height: 250
  },

})
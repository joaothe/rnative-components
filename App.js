import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, Button, Modal} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  abrir = () => {}

  render() {

    return (
      <View style={styles.container}>
        <Button title="Abrir" onPress={this.abrir} />
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View>
            <Text>Seja bem-vindo!</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
})
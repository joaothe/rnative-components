import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, Button, Modal} from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomePage extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  abrir = () => {
    this.setState({modalVisible: true})
  }

  fechar = () => {
    this.setState({modalVisible: false})
  }

  render() {

    return (
      <View style={styles.container}>
        <Button title="Abrir" onPress={this.abrir} />
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor: '#292929', flex: 1}}>
            <Text style={{color: '#fff', fontSize: 28}}>Seja bem-vindo!</Text>
            <Button title="Sair" onPress={this.fechar} />
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

const Navegador = StackNavigator({
  Home: { screen: HomePage }
})

export default Navegador
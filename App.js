import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      texto: '',
      textoInput: ''
    }

    this.sendVal = this.sendVal.bind(this)

  }

  sendVal() {
    alert("olá")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Digite seu nome..." />

        <Button title="Aperte" onPress={this.sendVal} />
        
        <Text style={styles.styledText}></Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 20,
    padding: 10
  },
  styledText: {
    marginTop: 15,
    fontSize: 23,
    textAlign: 'center',
    color: '#000000'
  }
})
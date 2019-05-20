import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, TextInput, AsyncStorage} from 'react-native'

export default class App extends Component {

  //Async storage: consegue gravar algo no celular, e se quiser fechar o app, ele mostra o que foi salvo antes

  constructor(props) {
    super(props)
    this.state = {
      nome: ''
    }

    this.gravarNome = this.gravarNome.bind(this)

    AsyncStorage.getItem("nomeDigitado").then((value) => {
      this.setState({nome: value})
    })
  }
  
  gravarNome(text) {
    this.setState({nome: text})

    AsyncStorage.setItem("nomeDigitado", text)
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                   value={this.state.nome}
                   onChangeText={(text) => this.gravarNome(text)}
                   underlineColorAndroid="transparent" />
        <Text style={styles.nome}>{this.state.nome}</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000000',
    padding: 10,
    borderWidth: 1
  },
  nome:{
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 20
  }
})
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'

class StyledButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: props.cor
      }
    })
  }

  render() {
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      textoFrase: ''
    }

    this.frases = [
      "acredite em você",
      "aproveite a vida",
      "dedique-se",
      "sonhe grande"
    ]

  }

  quebrarBiscoito = () => {
    let state = this.state

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    state.textoFrase = this.frases[numeroAleatorio]

    this.setState(state)

  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./src/biscoito.png')} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <StyledButton cor="#dd7b22" nome="Quebrar Biscoito" onPress={this.quebrarBiscoito} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})
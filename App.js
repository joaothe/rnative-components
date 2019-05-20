import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, FlatList} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)

    // Flatlist carrega só o que aparece. Vai carregando aos poucos.
    // Scrowview carrega tudo de uma vez
    this.state = {
      listaData: [
        { key: '1', nome: 'Joao', idade: 22 },
        { key: '2', nome: 'Pedro', idade: 25 },
        { key: '3', nome: 'Fernando', idade: 35 },
        { key: '4', nome: 'Lucas', idade: 60 },
        { key: '5', nome: 'Gustavo', idade: 43 },
        { key: '6', nome: 'Marcelo', idade: 51 }
      ]
    }
  }

  renderData = ({item}) => {
    return (
      <View style={styles.areaView}>
        <Text style={styles.texto}>{item.nome}</Text>
        <Text style={styles.texto}>{item.idade}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.listaData} renderItem={this.renderData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: 300,
    backgroundColor: 'blue'
  },
  areaView:{
    marginTop: 25
  },
  texto: {
    fontSize: 18,
    color: 'yellow'
  }
})
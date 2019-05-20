import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, FlatList} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listaData: [
        { nome: 'Joao', idade: 22 },
        { nome: 'Pedro', idade: 25 },
        { nome: 'Fernando', idade: 35 },
        { nome: 'Lucas', idade: 60 },
        { nome: 'Gustavo', idade: 43 },
        { nome: 'Marcelo', idade: 51 }
      ]
    }
  }

  renderData = ({item}) => {
    return (
      <View>
        <Text>{item.nome}</Text>
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
    flex: 1
  }
})
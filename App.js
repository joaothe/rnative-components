import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, FlatList, Picker} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      pizza: 0,
      pizzas: [
        { nome: 'pepperoni', valor: 40},
        { nome: 'frango', valor: 30},
        { nome: 'presunto', valor: 20},
        { nome: 'milho', valor: 10},
        { nome: 'bacon', valor: 5},
        { nome: 'carne', valor: 15}
      ]
    }
  }

  render() {

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} /> 
    })

    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}>
          {pizzasItem}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
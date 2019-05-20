import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, FlatList, Picker, Slider} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      valor: 10
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Slider minimumValue={0}
                maximumValue={100}
                onValueChange={(val) => this.setState({valor: val})}
                value={this.state.valor} />
        <Text style={{textAlign: 'center'}}>{this.state.valor}</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1
  }
})
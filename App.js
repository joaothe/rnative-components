import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'joao'
    }
  }

  getName = (value) => {
    this.setState({name: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Name"
          onChangeText={this.getName}
          underlineColorAndroid="transparent" />
        <Text style={styles.textStyled}>{this.state.name}</Text>
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
  textStyled: {
    textAlign: 'center',
    fontSize: 17,
    color: '#000000'
  }
})
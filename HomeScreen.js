import React, { Component } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.state = { height: "", weight: "" };

  }
  render() {
    return (
      <View style={styles.container}>
        <Image
      style={styles.logo}
      source={{
        uri: 'https://healthyhabitswellness.net/wp-content/uploads/bmi-gauge-1200x675.jpg'}}
        />
        <Text style={styles.title}>Height</Text>
        <TextInput style={styles.desc} placeholder="Enter in inches..." onChangeText={this.handleChangeHeight}
              defaultValue={this.state.height}></TextInput>
        <Text style={styles.title}>Weight</Text>
        <TextInput style={styles.desc} placeholder="Enter in pounds..." onChangeText={this.handleChangeWeight}
              defaultValue={this.state.weight}></TextInput>
              {/* <Text>{this.state.weight}</Text> */}
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Results', {height: this.state.height, weight: this.state.weight})}>
          <View style = {styles.button}>
            <Text style = {{color: 'white', fontSize: 25, fontWeight: "bold"}}>Calculate</Text>
          </View>
        </TouchableOpacity>
      </View> 
    )
  }
      
  handleChangeHeight(newText){

    this.setState({
      value: newText
    });

    this.state.height = newText
  }
  
  handleChangeWeight(newText){

    this.setState({
      value: newText
    });

    this.state.weight = newText;
  }

}


const styles = StyleSheet.create({
  block: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    margin: 5
  },
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    marginTop: 20
  },
  desc: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
    borderBottomColor: '#ACACAC',
    borderBottomWidth: 2,
    marginLeft: 50,
    marginRight: 50
  },
  button: {
    backgroundColor: '#0D98BA',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 55,
    height: 60,
    width: 275,
    marginTop: 50,
  },
  logo: {
    marginTop: 10,
    width: 400,
    height: 220,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#C4C4C4'
  }
});

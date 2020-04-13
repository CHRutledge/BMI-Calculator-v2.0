import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Results extends Component{
  render() {

    const height = this.props.route.params.height;
    const weight = this.props.route.params.weight;

    if (calculateBMI(height, weight) < 18.5){
      img = 'https://previews.123rf.com/images/thorstenschmitt/thorstenschmitt1109/thorstenschmitt110900311/10495313-trendy-but-gross-underweight.jpg'
      result = "underweight"
    }
    else if (calculateBMI(height, weight) >= 18.5 && calculateBMI(height, weight) < 25) {
      img = 'https://fscomps.fotosearch.com/compc/CSP/CSP246/healthy-weight-stock-image__k2463902.jpg'
      result = "normal"
    }
    else if (calculateBMI(height, weight) >= 25 && calculateBMI(height, weight) < 30) {
      img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr1CyogBQQicVgLgEFd5P8pNQgb3g3FIIuztS5PVfNkbqsIX-z&usqp=CAU'
      result = "overweight"
    }
    else if (calculateBMI(height, weight) >= 30 && calculateBMI(height, weight) < 35) {
      img = 'https://image.shutterstock.com/image-photo/fat-man-check-out-his-260nw-572861491.jpg'
      result = "obese"
    }
    else {
      img = 'https://media1.s-nbcnews.com/j/streams/2013/august/130815/6c8642701-g-cvr-130815-obesity-417p.nbcnews-fp-1200-800.jpg'
      result = "extremely obese"
    }

    return (
      <View style={styles.container}>
        <Image
      style={styles.logo}
      source={{
        uri: img}}
        />
        <Text style={styles.desc}>{parseFloat(calculateBMI(height, weight)).toFixed(2)}</Text>

        <Text style={styles.title}>Your body mass index is {result}.</Text>

      </View>
    )
  }
}

function calculateBMI(height, weight){
  return (weight/(height*height))*703;
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
    marginTop: 20,
    marginBottom: 20
  },
  desc: {
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 35,
    fontSize: 16,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    backgroundColor: '#0D98BA',
    borderRadius: 20
  },
  button: {
    backgroundColor: '#00B3E3',
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
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black'
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button1: {
    width: 90,
    height:90,
    marginLeft: 160,
    marginTop:300,
    borderRadius: 40,
    backgroundColor: '#BD4CBF'
  },
  button2: {
    width: 90,
    height:90,
    position:"absolute",
    marginLeft: 60,
    marginTop:5,
    borderRadius: 40,
    backgroundColor: '#BD4CBF'
  },
  button3: {
    width: 90,
    height:90,
    position:"absolute",
    marginLeft:260,
    marginTop:5,
    borderRadius: 40,
    backgroundColor: '#BD4CBF'
  },
  button4: {
    width: 90,
    height:90,
    position:"absolute",
    marginLeft:160,
    marginTop:100,
    borderRadius: 40,
    backgroundColor: '#BD4CBF'
  }

});

export default class Controls extends Component {

  Loadverify = () => {
   
    fetch('http://da9b2d39.ngrok.io/getCordi', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: {
    x: this.state.x,
     y: this.state.y, z: this.state.z
  },
});

    
   
    console.log(this.state.z)
  };

  state = {
      x: 0,
      y: 0,
      z: 0
  }
  render() {
    return (
      <View styles={{flex:1}}>
        <Button buttonStyle={styles.button1}
        onPress={() => this.setState({ x: 0, y: 0, z: 1 },()=>this.Loadverify)}
        
        icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
        >
        </Button>
        <Button
        onPress={() => this.setState({ x: -1, y: 0, z: 0 },()=>this.Loadverify)}
            buttonStyle={styles.button2}
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
            
        />
        <Button
        onPress={() => this.setState({ x: 1, y: 0, z: 0 },()=>this.Loadverify)}
            buttonStyle={styles.button3}
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
            
        />
        <Button
        onPress={() => this.setState({ x: 0, y: 0, z: -1 },()=>this.Loadverify)}
            buttonStyle={styles.button4}
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
            
        />
      </View>
    );
  }
}

import React from 'react';
import { Component,Fragment } from "react";
import Controls from './src/components/Controls';
import GamePad from 'react-native-game-pad';

import { setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import {gyroscope} from "react-native-sensors";


export default class App extends Component {
  
  constructor(props) {
 
    super(props);
    this.state={
       x1 : 0,
       x2: 0,
       y1 : 0,
       y2 : 0,
       z1 : 0,
       z2: 0,
     } 
    setUpdateIntervalForType(SensorTypes.gyroscope, 100);
    const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) =>
    {
      this.setState({x2:x-this.state.x1,y2:y-this.state.y1,z2:z-this.state.z1}),
      
     
      
      this.setState({x1:x,y1:y,z1:z})
      
  if (this.state.x2>1.5||this.state.y2>1.5||this.state.x2>1.5) 
  {
    console.log(this.state.x2,this.state.y2,this.state.z2)
    fetch('http://da9b2d39.ngrok.io/getCordi', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
       x:this.state.x2,y:this.state.y2,z:this.state.z2
      },
    });
  } 

     
    }
    
  
  );
  
  }

  render() {
 
    return (
      // <Fragment>
        <Controls /> 
      // </Fragment>
    );
  }
}


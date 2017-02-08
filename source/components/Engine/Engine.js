/**
 * Created by micka on 08/02/2017.
 */

import React from 'react';
const Sounds = require('../../constants/sound.json');

export default class Engine extends React.Component{
  constructor(props){
    super(props);
    this.sounds();
  }
  sounds(){
    fetch(Sounds)
      .then( (response) => {
        return response.json() })
      .then( (json) => {
        this.setState({data: json});
      });
  }
  render(){
    return(
      <div>
        <h1>Engine</h1>
      </div>
    )
  }
};
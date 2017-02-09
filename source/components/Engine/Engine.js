/**
 * Created by micka on 08/02/2017.
 */

import React from 'react';
// import toto from '../../sound/fire.ogg';
import test from 'file-loader?name=[path][name].[ext]!../../sound/Raining-sound.mp3';
import fire from 'file-loader?name=[path][name].[ext]!../../sound/Fire.ogg';
import Sound from '../Sound/Sound';

export default class Engine extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {console.log(test,fire)}
        <h1>Engine</h1>
        <audio controls>
            <source src={test} type="audio/mpeg"/>
              Your browser does not support the audio element.
        </audio>

          <Sound url="source/constants/sound.json"/>
      </div>
    )
  }
};
/**
 * Created by Mickael.LACOMBE on 09.02.2017.
 */

import React from 'react';
import $ from 'jquery';
import ReactHowler from 'react-howler'


export default class Sound extends React.Component{
    state={
        sounds: [],
        playing: false
    }
    constructor(props){
        super(props);

        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
    }
    componentWillMount(){
        // this.setState({sounds: });

        $.ajax({
            dataType: "json",
            url: this.props.url,
            success: function(response) {
                this.setState({
                    sounds: response.sounds,
                });
                // console.log(response);
            }.bind(this)
        });
    }
    handlePlay () {
        this.setState({
            playing: true
        })
    }

    handlePause () {
        this.setState({
            playing: false
        })
    }
    render(){
        // const sound = this.state.sounds.map((s) => {
        //     console.log(s);
        // });
        return(
          <div>
              {this.state.sounds.map((item,i) =>
                  (
                      <div>
                          <ReactHowler
                              key={i}
                          src={item.filename}
                          playing={this.state.playing}
                          loop={true}
                          />
                          <p>{item.name}</p>
                          <button onClick={this.handlePlay}>Play</button>
                          <button onClick={this.handlePause}>Pause</button>
                      </div>
                  )
              )}
          </div>
        );
    }
}
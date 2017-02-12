/**
 * Created by Mickael.LACOMBE on 09.02.2017.
 */

import React from 'react';
import ReactHowler from 'react-howler'
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';

export default class Sound extends React.Component{
    state={
        playing: false,
        name: '',
        filename: '',
        volume: 1.0,
    }
    static propTypes = {
      name: React.PropTypes.string,
      filename: React.PropTypes.string,
    }
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }

    componentWillMount(){
      this.setState({
        name: this.props.name,
        filename: this.props.filename,
      });
    }

    handleClick(){
      var isToggle = this.state.playing == true ? false : true
      // var border = ;

      //border: ;
      this.setState({
        playing: isToggle,
      })
    }

    handlePlay () {
        this.setState({
            playing: true
        })
    }

    handleVolume = (event, value) => {
      console.log(value);
      this.setState({
        volume: value
      });
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
      var border = this.state.playing === false ? '1px solid rgba(255, 255, 255, 0.68)' : '1px solid rgba(22, 212, 16, 0.68)';
      var stylePaper = {
        height: 200,
        width: 300,
        padding: 10,
        float: 'left',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        border: border,
      };
      const styleVolume = {
        height: 50,
      };

      return(
          <div>
            <Paper style={stylePaper} zDepth={1} onClick={this.handleClick}>

              <ReactHowler
              src={this.state.filename}
              playing={this.state.playing}
              loop={true}
              volume={this.state.volume}
              html5={true}
              />
              <p>{this.state.name}</p>
              {/*<button onClick={this.handlePlay}>Play</button>*/}
              {/*<button onClick={this.handlePause}>Pause</button>*/}

              <Slider max={1.0} style={styleVolume} axis="y" onChange={this.handleVolume}  step={0.05} value={this.state.volume} />
              </Paper>
          </div>
        );
    }
}
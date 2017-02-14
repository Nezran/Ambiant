import React from 'react';
import $ from 'jquery';
import Sound from '../Sound/Sound';
import ReactHowler from 'react-howler'
import './Sounds.css';
import ScrollArea from 'react-scrollbar';

export default class Sounds extends React.Component {
    state = {
        sounds: [],
        globalVolume: 1.0,
        mute: false,
    }

    constructor(props) {
        super(props);
        console.log(Howler);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);

    }

    componentWillMount() {
        // this.setState({sounds: });
        $.ajax({
            dataType: "json",
            url: this.props.url,
            success: function (response) {
                this.setState({
                    sounds: response.sounds,
                });
                console.log(response);
            }.bind(this)
        });

        // this.setState({
        //   globalVolume: parseFloat(window.Howler.volume),
        // });
    }

    handleMute() {
        var mute = this.state.mute == false ? true : false;
        window.Howler.mute(mute);
        this.setState({
            mute: mute
        });

    }

    handleVolume(e) {
        window.Howler.volume(parseFloat(e.target.value));
        this.setState({
            globalVolume: parseFloat(e.target.value)
        });
    }

    render() {
        let scrollbarStyles = {borderRadius: 5};
        return (
            <section>
                <input
                    type='range'
                    min='0'
                    max='1'
                    step='.05'
                    value={this.state.globalVolume}
                    onChange={this.handleVolume}
                />
                Volume:{this.state.globalVolume}
                <button onClick={this.handleMute}>Mute {this.state.mute.toString()}</button>
                <ScrollArea
                    className="area"
                    contentClassName="content"
                    verticalScrollbarStyle={scrollbarStyles}
                    verticalContainerStyle={scrollbarStyles}
                    horizontalScrollbarStyle={scrollbarStyles}
                    horizontalContainerStyle={scrollbarStyles}
                    smoothScrolling= {true}
                    horizontal={true}
                    vertical={true}
                    minScrollSize={10}
                >
                    {/*<div className="sounds">*/}
                        <div className="wrapper">

                        {this.state.sounds.map((e, i) =>(
                                <Sound key={i} filename={"source/sound/" + e.filename} name={e.name}/>
                            )
                        )}

                        </div>
                    {/*</div>*/}
                </ScrollArea>

                <ScrollArea
                    className="area"
                    contentClassName="content"
                    verticalScrollbarStyle={scrollbarStyles}
                    verticalContainerStyle={scrollbarStyles}
                    horizontalScrollbarStyle={scrollbarStyles}
                    horizontalContainerStyle={scrollbarStyles}
                    smoothScrolling= {true}
                    minScrollSize={40}
                    onScroll={this.handleScroll}
                >
                    <p>fsfsdfd</p>
                </ScrollArea>
            </section>
        );
    }
}
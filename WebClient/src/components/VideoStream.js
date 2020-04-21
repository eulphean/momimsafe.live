import React from 'react'
import Radium from 'radium'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import donotenter from './donotenter.jpg'
import { color } from './CommonStyles';

const url="ws://radiant-oasis-49153.herokuapp.com/";

const styles={
    container: {
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        zIndex: '10',
    },
    
    canvas: {
        height: '100vh',
        width: '100vw'
    },

    overlay: {
        background: color.deepSky,
        opacity: '25%',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
    }
}; 

class VideoStream extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };

        this.container = React.createRef(); 
        this.canvas = React.createRef();
    }

    componentDidMount() {
        this.player = new JSMpeg.VideoElement(
            this.container.current,
            url,
            { canvas: this.canvas.current}, // My own canvas. 
            { audio: false } // Flag to hide the unmute button. 
        ); 
    }

    render() {
        return (    
            <div style={styles.container} ref={this.container}>
                <div style={styles.overlay}>
                </div>
                <canvas style={styles.canvas} ref={this.canvas}></canvas>
            </div>
        );
    }
}

export default Radium(VideoStream);
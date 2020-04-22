import React from 'react'
import Radium from 'radium'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import { color } from './CommonStyles';
import { fadeInLeft } from 'react-animations'

const url="ws://radiant-oasis-49153.herokuapp.com/";
const fadeInDuration = '3s'

const styles={
    container: {
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        zIndex: '10',
    },

    flipInX: {
        animationName: Radium.keyframes(fadeInLeft, 'flipInX'),
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },
    
    canvas: {
        height: '100vh',
        width: '100vw'
    },

    overlay: {
        background: 'rgb(252,240,225)',
        background: 'linear-gradient(356deg, rgba(252,240,225,1) 0%, rgba(5,90,133,1) 100%)',
        opacity: '0.2',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
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
        let containerStyle = [styles.container, styles.flipInX];
        return (    
            <div style={containerStyle} ref={this.container}>
                <div style={styles.overlay}>
                </div>
                <canvas style={styles.canvas} ref={this.canvas}></canvas>
            </div>
        );
    }
}

export default Radium(VideoStream);
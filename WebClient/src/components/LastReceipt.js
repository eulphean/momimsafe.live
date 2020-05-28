import React from 'react'
import Radium from 'radium'
import Receipt from './Receipt.js'
import { padding } from './CommonStyles.js'
import Websocket from './Websocket.js'
import { fadeInDown } from 'react-animations'


const fadeInDuration = '2.5s';

var heightAni = Radium.keyframes({
    '0%': {height: '0'},
    '100%': {height: '200px'},
  }, 'height');

const styles={
    container: {
        display: 'flex',
        backgroundColor: 'red',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
    },

    wrapContainer: {
        position: 'absolute',
        width: '100%',
        height: '0px',
        justifyContent: 'center',
        display: 'flex',
        zIndex: '0',
        backfaceVisibility:'hidden'
    },

    animateWrapper: {
        animationName: heightAni, 
        animationDelay: '1s',
        animationDuration: '3.5s',
        animationFillMode: 'forwards',
        animationTimingFunction:'ease-in'
    },

    scrollContainer: {
        position: 'absolute',
        bottom: '0%',
        display: 'flex',
        backgroundColor: 'green',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

        '@media (min-width: 450px) and (orientation: landscape)' : {
            width: 'calc(100%/2 - 4%)'
        },
    
        '@media (min-width: 750px)' : {
            width: 'calc(100%/2 - 3%)'
        },
    
        '@media (min-width: 900px)' : {
            width: 'calc(100%/2 - 2%)'
        },
    
        '@media (min-width: 1200px)' : {
            width: 'calc(100%/3 - 2%)'
        },
    
        '@media (min-width: 1400px)' : {
            width: 'calc(100%/4 - 2%)'
        },
    },

    individualReceipt: {
        display: 'flex',    
        flexDirection: 'column',
        width: '100%'
    },

    actionBar: {
        zIndex: '1',
        position: 'fixed',
        left: '0%',
        backgroundColor: 'blue',
        color: 'white'
    }
}

class LastReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lastPayload: [],
            enableAnimation: false,
            animationStyle: {
                animationName: heightAni, 
                animationDuration: '2.5s',
                animationFillMode: 'forwards',
                animationTimingFunction:'ease-in'
            }
        };

        this.wrapper = React.createRef(); 
        this.websocket = React.createRef();
        this.scrollContainer = React.createRef(); 
    }

    render() {
        let receipts = this.processCurrentPayload();
        let actions = this.getActions();
        let wrapperStyle = this.state.enableAnimation ? [styles.wrapContainer, this.state.animationStyle] : styles.wrapContainer; 
        return (
            <div style={styles.container}>
                <Websocket 
                    ref={this.websocket}
                    processEntries={this.entriesReceived.bind(this)}
                /> 
                {actions}
                <div ref={this.wrapper} style={wrapperStyle} onAnimationEnd={this.onWrapperAnimationEnd.bind(this)}>   
                    <div ref={this.receiptContainer} style={[styles.scrollContainer]}>
                        {receipts}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
       // Get the last message. 
       this.requestRandomMessages(); 
    }

    onWrapperAnimationEnd() {
        console.log('Animation ending'); 
        // this.setState({
        //     enableAnimation: false
        // });
    }

    getActions() {
        return (
            <div style={styles.actionBar}>
                <button onClick={this.enableAnimation.bind(this)}>
                    PULL
                </button>
            </div>
        ); 
    }

    processCurrentPayload() {
        let receipts = [];
        for (let a = 0; a < this.state.lastPayload.length; a++) {
            let r = (  
                <div key={a} style={styles.individualReceipt} >
                    <Receipt entry={this.state.lastPayload[a]} />
                </div>
            ); 
            receipts.unshift(r); 
        }

        return receipts; 
    }

    updateHeightAnimation(currentHeight, newHeight) {
        heightAni = Radium.keyframes({
            '0%': {height: currentHeight + 'px'},
            '100%': {height: newHeight + 'px'},
            }, 'height');
    }

    enableAnimation(event) {
        event.stopPropagation();

        // Calculate the current height
        let curHeight = parseInt(this.wrapper.current.clientHeight, 10);
        let finalHeight = curHeight + parseInt(200, 10); 
        console.log('enableAnimation: ' + curHeight + ', ' + finalHeight);

        this.updateHeightAnimation(curHeight, finalHeight); 
        console.log('Animation begin');
        this.setState({
            enableAnimation: true,
            animationStyle: {
                animationName: heightAni,
                animationDuration: '2.5s',
                animationFillMode: 'forwards',
                animationTimingFunction:'ease-in'
            }
        });
    }

    requestRandomMessages() {
        console.log('Pulling random messages'); 
        this.websocket.current.requestData(); 
    }

    entriesReceived(payload) {
        console.log('Received random messages');
        console.log(payload);
        this.setState({
            lastPayload: payload
        }); 
    }

    pullLastMessage() {
        console.log('Trying to pull the last message');
        this.websocket.current.requestLastMessage(); 
    }

    processLastMessage(payload) {
        console.log('Last Message received'); 

        let currentPayload = this.state.lastPayload; 
        currentPayload.push(payload); 

        this.setState({
            lastPayload: currentPayload
        });
    }
}

export default Radium(LastReceipt);

// , {top: this.state.scrollHeight}
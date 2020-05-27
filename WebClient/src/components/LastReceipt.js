import React from 'react'
import Radium from 'radium'
import Receipt from './Receipt.js'
import { padding } from './CommonStyles.js'
import Websocket from './Websocket.js'
import { fadeInDown } from 'react-animations'


const fadeInDuration = '2.5s';

const styles={
    container: {
        display: 'flex',
        backgroundColor: 'red',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',

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

    scrollContainer: {
        display: 'flex',
        backgroundColor: 'green',
        flexDirection: 'column',
        overflow: 'scroll',
        maxHeight: '100vh',
        width: '100%',

        alignItems: 'center'
    },

    individualReceipt: {
        display: 'flex',    
        flexDirection: 'column',
        width: '100%'
    },

    actionBar: {
        display: 'flex',
        alignSelf: 'center'
    },

    fadeInDown: {
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        animationDuration: fadeInDuration,
        animationTimingFunction: 'ease-in'
    },
}

class LastReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lastPayload: []
        };

        this.websocket = React.createRef();
    }

    render() {
        let receipts = this.processCurrentPayload();
        let actions = this.getActions(); 
        return (
            <div style={styles.container}>
                <Websocket 
                    ref={this.websocket}
                    processLastMessage={this.processLastMessage.bind(this)}
                /> 
                <div style={styles.content}>
                    {actions}
                    <div style={styles.scrollContainer}>
                        {receipts}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
       this.pullLastMessage(); 
    }

    getActions() {
        return (
            <div style={styles.actionContainer}>
                <button onClick={this.pullLastMessage.bind(this)}>
                    PULL
                </button>
            </div>
        ); 
    }

    processCurrentPayload() {
        let receipts = []; 
        for (let a = 0; a < this.state.lastPayload.length; a++) {
            let receiptStyle = [styles.individualReceipt]; 
            if (a<1) {
                receiptStyle= [styles.individualReceipt, styles.fadeInDown]; 
            }
            let r = (  
                <div key={a} style={receiptStyle} >
                    <Receipt entry={this.state.lastPayload[a]} />
                </div>
            ); 
            receipts.unshift(r); 
        }
        return receipts; 
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
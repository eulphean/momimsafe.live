import React from 'react'
import Radium from 'radium'
import Receipt from './Receipt.js'
import { padding } from './CommonStyles.js'
import Websocket from './Websocket.js'

const styles={
    container: {
        display: 'flex',
        backgroundColor: 'red',
        justifyContent: 'center'
    },

    scrollContainer: {
        display: 'flex',
        backgroundColor: 'green',
        flexDirection: 'column',
        overflow: 'scroll',
        maxHeight: '100vh',

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

    actionContainer: {
        display: 'flex',
        alignSelf: 'center'
    }
    
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
        return (
            <div style={styles.container}>
                <Websocket 
                    ref={this.websocket}
                    processLastMessage={this.processLastMessage.bind(this)}
                /> 
                <div style={styles.scrollContainer}>
                    {receipts}
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
            let actions = this.getActions(); 
            let r = (        
                <div key={a} style={styles.individualReceipt} >
                    <Receipt entry={this.state.lastPayload[a]} />
                    {actions}
                </div>
            ); 
            receipts.push(r); 
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

// receiptsContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: padding.small,
//     justifyContent: 'center'
// },
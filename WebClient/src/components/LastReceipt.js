import React from 'react'
import Radium from 'radium'
import Receipt from './Receipt.js'
import { padding } from './CommonStyles.js'
import Websocket from './Websocket.js'

const styles={
    container: {
        display: 'flex',
        backgroundColor: 'red'
    },

    receiptContainer: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },

    individualReceipt: {
        display: 'flex',
        marginLeft: padding.extraSmall,
        marginRight: padding.extraSmall,
        marginTop: padding.small,
    
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
    }
    
}

class LastReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lastPayload: ''
        };

        this.websocket = React.createRef();
    }

    render() {
        return (
            <div style={styles.container}>
                <Websocket 
                    ref={this.websocket}
                    processLastMessage={this.processLastMessage.bind(this)}
                /> 
                <div style={styles.receiptContainer}>
                   {this.state.lastPayload}
                </div>
            </div>
        );
    }

    componentDidMount() {
       this.pullLastMessage(); 
    }

    pullLastMessage() {
        console.log('Trying to pull the last message');
        this.websocket.current.requestLastMessage(); 
    }

    processLastMessage(payload) {
        console.log('Last Message received'); 
        let receipt = (
            <div style={styles.individualReceipt} >
                <Receipt entry={payload} />
            </div>); 
        this.setState({
            lastPayload: receipt
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
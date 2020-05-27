import React from 'react'
import Radium from 'radium'
import Receipt from './Receipt.js'
import moment from 'moment-timezone'
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
        let receipt = (<Receipt entry={payload} />); 
        this.setState({
            lastPayload: receipt
        });
    }
}

export default Radium(LastReceipt);
import React from 'react'
import Radium from 'radium'
import { color } from './CommonStyles.js'
import Websocket from './Websocket.js'
import Body from './Body.js'
import { isMobile } from 'react-device-detect'

const styles={
    container: {
        display: 'flex',
        backgroundColor: color.pureTeal,
        justifyContent: 'center',
        padding: '12px 12px 10px 12px',
        height: '100vh',
        overflow: 'scroll',
    },

    desktop: {
        width: '100vw'
    }, 

    // NOTE: Do not touch. 
    // Extra Div to hide the receipt from the top. 
    hidingDiv: {
        position: 'fixed',
        top: '0%',
        height: '12px',
        width: '100%',
        backgroundColor: color.pureTeal,
        zIndex: '2'
    }
}

class Printer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            databaseEntries: []
        };

        this.websocket = React.createRef();
        this.body = React.createRef();
    }

    render() {
        let containerStyles = isMobile ? styles.container : [styles.container, styles.desktop];
        return (
            <div style={containerStyles}>
                <Websocket 
                    ref={this.websocket}
                    processDatabase={this.processDatabase.bind(this)}
                    appendDatabase={this.appendDatabase.bind(this)}
                /> 
                <div style={styles.hidingDiv} />
                <Body 
                    ref={this.body}
                    database={this.state.databaseEntries} />
            </div>
        );
    }

    componentDidMount() {
       // As soon as the component is mounted, gather all the messages from the database.
       this.queryDatabase(); 
    }

    queryDatabase() {
        console.log('Query the entire database of messages.');
        this.websocket.current.readDatabase(); 
    }

    // Callback from the Websocket with the last message payload. 
    processDatabase(entries) {
        console.log('Entire database received with ' + entries.length + ' entries.'); 
        this.setState({
            databaseEntries: entries
        });
    }

    appendDatabase(entry) {
        console.log('Add a new entry to the dabatase'); 
        let currentReceiptIdx = this.body.current.getCurrentReceiptIdx(); 
        // Add the element at that index. 
        let currentDb = this.state.databaseEntries;
        currentDb.splice(currentReceiptIdx, 0, entry); 
        this.setState({
            databaseEntries: currentDb
        }); 
        // Before creating receipt, check if things are already printing. 
        if (!this.body.current.state.isDisabled) {
            this.body.current.createReceipt(); 
        }
    }


}

export default Radium(Printer);
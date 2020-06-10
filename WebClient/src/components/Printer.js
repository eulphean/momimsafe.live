import React from 'react'
import Radium from 'radium'
import { color } from './CommonStyles.js'
import Websocket from './Websocket.js'
import Body from './Body.js'

const styles={
    container: {
        display: 'flex',
        backgroundColor: color.pureTeal,
        justifyContent: 'center',
        padding: '12px',
        height: '100vh'
    },

    // Extra Div to hide the receipt from the top. 
    hidingDiv: {
        backgroundColor: color.black,
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
    }

    render() {;
        return (
            <div style={styles.container}>
                <Websocket 
                    ref={this.websocket}
                    processDatabase={this.processDatabase.bind(this)}
                /> 
                <div style={styles.hidingDiv}>
                </div>
                <Body database={this.state.databaseEntries} />
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
}

export default Radium(Printer);
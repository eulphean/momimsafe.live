import React from 'react'
import Radium from 'radium'
import io  from 'socket.io-client'

const localhostURL = "http://localhost:5000/app"
const herokuURL = "https://blooming-refuge-71111.herokuapp.com/app";


class Websocket extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };

        this.socket = io(herokuURL, { 
            reconnection: true, 
            reconnectionDelay: 500, 
            reconnectionAttempts: Infinity
        }); 

        this.socket.once('connect', this.subscribe.bind(this)); 
    }

    // Return an empty div. 
    render() {
        return (null);
    }

    subscribe() {
        console.log('Connected');

        // Subscribe to events. 
        this.socket.on('time', this.logTime.bind(this)); 
        this.socket.on('disconnect', this.disconnect.bind(this));
    }

    disconnect() {
        console.log('Socket Server Disconnected.')
    }

    logTime(data) {
        console.log('Socket Connection Alive: ' + data); 
    }

    sendMessage(message) {
        var now = new Date(); 
        var payload = {
          message: message.toLowerCase(), 
          date: now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate(),
          time: now.toLocaleTimeString()
        };
        
        // Send this payload to commit to the database. 
        console.log('Emitting Write Payload'); 
        this.socket.emit('writePayload', payload);
    }
}

export default Radium(Websocket);
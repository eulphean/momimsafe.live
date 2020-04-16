// Author: Amay Kataria
// Date: 04/16/2020
// File: streamer.js
// Description: Core Central server implementation for mumimsafe.live. It serves 2 routes primarily. 

var io = require('socket.io-client'); 
var localhostURL = "http://localhost:5000/streamer"; 
var herokuURL = "https://mysterious-shore-86207.herokuapp.com/receipt";

var socket = io.connect(localhostURL, {
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
}); 

// BUG: Be aware this needs to be selected as ONCE here. 
socket.once('connect', () => {
    console.log('Connected'); 
    socket.on('time', logTime); 
})

function logTime(time) {
    console.log('Socket Connection Alive: ' + time); 
}

// Read each image of the webcam and send it as base64 data on the websocket to the webserver. 
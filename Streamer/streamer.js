// Author: Amay Kataria
// Date: 04/16/2020
// File: streamer.js
// Description: Core Central server implementation for mumimsafe.live. It serves 2 routes primarily. 

var io = require('socket.io-client'); 
var localhostURL = "http://localhost:5000/streamer"; 
var herokuURL = "https://mysterious-shore-86207.herokuapp.com/receipt";
var cv = require('opencv4nodejs');

// camera device. 
const FPS = 30; 
const videoCap = new cv.VideoCapture(0); 
videoCap.set(cv.CAP_PROP_FRAME_HEIGHT, 200); 
videoCap.set(cv.CAP_PROP_FRAME_WIDTH, 200); 

var socket = io.connect(localhostURL, {
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
}); 

setInterval(() => {
    const frame = videoCap.read(); 
    const image = cv.imencode('.jpg', frame).toString('base64'); 
    socket.emit('image', image); 
}, 1000/FPS); 

// BUG: Be aware this needs to be selected as ONCE here. 
socket.once('connect', () => {
    console.log('Connected'); 
    socket.on('time', logTime); 
})

function logTime(time) {
    console.log('Socket Connection Alive: ' + time); 
}
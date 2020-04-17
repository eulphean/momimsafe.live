

// Socket IO
var socket; 

// Input
var input; 


// USE localhost for all testing. 
var localhostURL = "http://localhost:5000/app"
var herokuURL = "https://mysterious-shore-86207.herokuapp.com/app";

function setup() {
  input = new Input(onEncrypt); 
  
  // Connect to the socket, subscribe to events. 
  socket = io(localhostURL, { 
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity
  }); 

  // NOTE: Very careful that it has to be selected as once here. 
  socket.once('connect', onConnected); 
}

function draw() {
  noLoop();
}

function onEncrypt(message) {    
    // Emit data for the database on node server. 
    var now = new Date(); 
    var payload = {
      message: message, 
      date: now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate(),
      time: now.toLocaleTimeString()
    };
    
    // Send this payload to commit to the database. 
    console.log('Emitting Write Payload'); 
    socket.emit('writePayload', payload);
}

function onConnected() {
  console.log('Socket ' + socket.id + ' Connected');
  // This is an incoming socket event to ensure the upkeep of the 
  // connection between central server and the web client. 
  socket.on('time', logTime); 
  socket.on('image', handleImg); 
  socket.on('disconnect', () =>  console.log('Socket Server Disconnected.'));
}

function logTime(time) {
  console.log('Socket Connection Alive: ' + time); 
}

function handleImg(data) {
  var img = document.getElementById('frame'); 
  img.src = 'data:image/jpeg;base64,' + data; 
}
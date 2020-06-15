// Artist Book Client that helps setup the Artist Book called Antidote. 

var socket; 
var localhostURL = "http://localhost:5000/book"

function setup(){

  socket = io(localhostURL, { 
    reconnection: true,
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
  }); 

  socket.once('connect', onConnected); 
}

function logTime(time) {
  console.log('Socket Connection Alive: ' + time); 
}

function onPrintEntries() {
  socket.emit('printRandom'); 
  console.log('Emitting a printRandom event.');
}

function onCut(){
  socket.emit('cutPaper');
  console.log('Emitting a cutPaper event. ')
}

function onConnected() {
  console.log('Socket ' + socket.id + ' Connected');

  // Subscribe to time event to ensure the socket connection. 
  socket.on('time', logTime); 
  socket.on('disconnect', () => console.log('Socket Server Disconnected')); 
}

// function getData(s) {
//   var startDate = document.getElementById('start').value; 
//   var endDate = document.getElementById('end').value; 

//   var data = { 
//     from: startDate, 
//     to: endDate,
//     state: s, // Determines what kind of callback to fire from the store. 
//   }; 

//   console.log('Browser payload: ' + data.erows); 

//   return data; 
// }
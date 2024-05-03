// Artist Book Client that helps setup the Artist Book called Antidote. 

var socket; 
var localhostURL = "http://localhost:3000/book";

var curEntryTable; 
let numEntriesDiv; 
let curEntryIndex = 0; 

let allEntries; 

function setup(){

  socket = io(localhostURL, { 
    reconnection: true,
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
  }); 

  socket.once('connect', onConnected); 

  numEntriesDiv = document.getElementById('numEntries');
  curEntryTable = document.getElementById('curEntry');
  setupCurrentEntryTable();
}

function onConnected() {
  console.log('Socket ' + socket.id + ' Connected');

  // Subscribe to time event to ensure the socket connection. 
  socket.on('time', logTime); 
  socket.on('databaseEntries', processDatabaseEntries);
  socket.on('disconnect', () => console.log('Socket Server Disconnected')); 
}

function logTime(time) {
  console.log('Socket Connection Alive: ' + time); 
}

function onLoadEntries() {
  console.log('Load all entries');

  // Emit a request to read the entire database. 
  socket.emit('loadDatabase', {order : 'ASC'}); 
  // Initiate a DB call
  // Load all the data into RAM from the DB
  // numEntriesDiv.innerHTML = 100;
  // Set the first entry of pop into the cur entry table
  // Maintain the current index. 
}

function processDatabaseEntries(entries) {
  console.log('Processing database entries');
  numEntriesDiv.innerHTML = entries.length; 
  allEntries = entries; // We have all the entries in RAM now. 
  updateCurrentEntry(entries[0]); // Populate the first entry in the database.
}

function updateCurrentEntry(entry) {
  // Update entry cell. 
  let indexDiv = document.getElementById('index');
  indexDiv.innerHTML = curEntryIndex; 
  
  let dateDiv = document.getElementById('date');
  let d = entry.date.toString().split("T");
  dateDiv.innerHTML = d[0];

  let timeDiv = document.getElementById('time');
  timeDiv.innerHTML = entry.time;

  let messageDiv = document.getElementById('message');
  messageDiv.innerHTML = entry.message;
}

function onPrevious() {
  if (curEntryIndex > 0) {
    curEntryIndex -= 1;
    updateCurrentEntry(allEntries[curEntryIndex]); 
  }
}

function onNext() {
  curEntryIndex += 1; 
  updateCurrentEntry(allEntries[curEntryIndex]);
}

function onShow() {
  let curEntry = allEntries[curEntryIndex];
  socket.emit('show', { entry : curEntry });
}

function onPrint() {
  let curEntry = allEntries[curEntryIndex];
  socket.emit('print', { entry : curEntry });
}

function onCut(){
  socket.emit('cutPaper');
  console.log('Emitting a cutPaper event. ')
}

function onPrintCont() {
  // Use the current entry index as the starting point
  let messages = [];
  let startIdx = curEntryIndex; 
  let maxMessages = 50; 
  for (var i = startIdx; i < startIdx + maxMessages; i++) {
    messages.push(allEntries[i]); 
  }
  socket.emit('printEntries', {entries: messages}); 
}

function setupCurrentEntryTable() {
  var row = curEntryTable.insertRow(0);

  var idxCell = row.insertCell(0);
  idxCell.innerHTML = 'Index';
  idxCell.width = '5%';
 
  var dateCell = row.insertCell(1);
  dateCell.innerHTML = 'DATE (YYYY-MM-DD)';
  dateCell.width = '10%';

  var timeCell = row.insertCell(2);
  timeCell.innerHTML = 'TIME';
  timeCell.width = '8%';

  var binaryCell = row.insertCell(3);
  binaryCell.innerHTML = 'Message';
  binaryCell.width = '50%';
}
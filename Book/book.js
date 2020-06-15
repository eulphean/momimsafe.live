// Author: Amay Kataria
// Date: 06/14/2020
// File: book.js
// Description: Nodejs webserver that will help print the receipts for the artist book project. 
// It will read entries based on some inputs from a webclient and print them in receipts. It'll 
// bulk print the receipts for the artist book. 

var express = require('express'); 
var socket = require('socket.io');
var Pool = require('pg').Pool; 
var printer = require('./bookPrinter.js');

// ------------------ postgresql database ---------------------- // 
const connString = process.env['DATABASE_URL'];
console.log('Database Connection String: ' + connString); 
const pool = new Pool({
    connectionString: connString
}); 

// ------------------ Express webserver ------------------------ //
var app = express(); 
var server = app.listen(process.env.PORT || 5000, function() {
    console.log('Artist Book server successfully started'); 
});
app.use(express.static('./Client')); 

// ------------------ Websocket ------------------------ //
var io = socket(server); 
var bookClient = io.of('/book').on('connection', onBookClient); // Connects the web instance of central server to read data. 

// Send an event to all connected clients to keep the Socket Connection Alive. 
// This event is sent every 1 second to every client connected. 
setInterval(alive, 1000);

function alive() {
    var t = new Date().toTimeString(); 
    bookClient.emit('time', t); 
}

function onBookClient(socket) {
    console.log('New Book Web Client connection: ' + socket.id); 
    socket.on('printRandom', onPrintRandomEntries); 
    socket.on('cutPaper', onCutPaper);
    socket.on('disconnect', () => console.log('Book Web client ' + socket.id + ' diconnected'));
}

function onCutPaper(socket) {
    console.log('Requesting to cut paper.'); 
    printer.cutPaper();
}

function onPrintRandomEntries(socket) {
    console.log('Requesting to print some random entries.');
    var queryText = 'SELECT * FROM entries ORDER BY random() limit 5;'; 
    pool.query(queryText, (error, results) => {
        sqlReadRandomCallback(error, results, socket)
    });
}

function sqlReadRandomCallback(error, results, socket) {
    if (error) {
        throw error;
    }
    
    // Format the results somehow. 
    var entries = results.rows; 
    console.log('Sending entries to printer.'); 
    printer.printMessages(entries); 
    // Keep it around here if I want to put these entries on the screen for the artist book. 
    // console.log('Sending random entries');
    // socket.emit('receiveRandomEntries', entries);
}
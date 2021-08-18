var io = require('socket.io-client'); 
var localhostURL = "http://localhost:5000/receipt"
// var herokuURL = "https://blooming-refuge-71111.herokuapp.com/receipt";
var emoji = require('node-emoji');
var Pool = require('pg').Pool; 
var printer = require('./bulkPrinter.js');

var socket = io.connect(localhostURL, {
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
}); 

//  Should we print everything? No, don't print. 
var printEntries = false; 

// // ------------------ postgresql database ---------------------- // 
const connString = process.env['DATABASE_URL'];
// This is the connection string for the heroku database with all the strings. 
// const connString = 'postgres://oowxohfdjkkatl:c9e29b00a0a8d7f1b886c1e719db22a8219600ed9b6af58289ca8fcf4a54249b@ec2-3-223-21-106.compute-1.amazonaws.com:5432/d2l4pnkodvnivv';
console.log('Database Connection String: ' + connString); 
const pool = new Pool({
    connectionString: connString,
    ssl: {
        rejectUnauthorized: false
    }
}); 

// BUG: Be aware this needs to be selected as ONCE here. 
socket.once('connect', () => {
    console.log('Connected'); 
    console.log('Loading Heroku database in memory.'); 
    // Load everthing in the database (when we are doing bulk printing, turn this on)
    // onLoadDatabase('ASC');
    // Load entire database
    // Show total messages in the db. 
    socket.on('printPayload', onPayload);
    socket.on('time', logTime); 
});

function logTime(time) {
    console.log('Socket Connection Alive: ' + time); 
}

// New Message Received
// Print seperately. 
function onPayload (payload) {
    console.log('New Print Payload Received'); 
    console.log(payload);
    let o = beautifyDate(payload['date'], payload['time']);
    payload['date'] = o.date; 
    payload['time'] = o.time; 
    printer.printPayload(payload)
}

function onLoadDatabase(order) {
    console.log('Requesting for some random entries with order ' + order);
    var queryText = 'SELECT * FROM entries ORDER BY date ' + order + ', time ' + order + ' LIMIT 2' + ';'; 
    pool.query(queryText, (error, results) => {
        sqlReadDatabaseCallback(error, results)
    });
}

function sqlReadDatabaseCallback(error, results) {
    if (error) {
        throw error;
    }
    
    // Format the results somehow. 
    var entries = results.rows; 

    if (printEntries) {
        onPrintEntries(entries); 
    }

    console.log('Total entries in the DB ' + entries.length);
}

function onPrintEntries(entries) {
    for (var i = 0; i < entries.length; i++) {
        let entry = entries[i]; // Get the entry. 
        entry['message'] = cleanMessage(entry['message']); // Clean it
        entries[i] = entry; // Reassign it. 
        let o = simpleBeautifyDate(entry['date'], entry['time']);
        entry['date'] = o.date; 
        entry['time'] = o.time;
    }

    printer.printMessages(entries);
}

function cleanMessage(msg) {
    let m = emoji.unemojify(msg); // Replace any emoji.
    let cleanedMsg = m.replace(/(\r\n|\n|\r)/gm,"\n");
    return cleanedMsg; 
}  

// Date is the javascript date format. 
function simpleBeautifyDate(date, time) {
    var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    let t = time.toString().split(':');

    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), t[0], t[1], t[2]);
    var obj = {
        date: d.toLocaleDateString('en-US', dateOptions),
        time: d.toLocaleTimeString('en-US')
    }

    return obj; 

}

function beautifyDate(date, time) {
    let d = date.toString().split("-"); 
    let t = time.toString().split(':');
    var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    var seconds = t[2].toString().split(' ')[0];
    d = new Date(d[0], d[1], d[2], t[0], t[1], seconds); 
    var obj = {
        date: d.toLocaleDateString('en-US', dateOptions),
        time: d.toLocaleTimeString('en-US')
    }
    return obj;
}

var io = require('socket.io-client'); 
var localhostURL = "http://localhost:5000/receipt"
var herokuURL = "https://blooming-refuge-71111.herokuapp.com/receipt";
var emoji = require('node-emoji');

var socket = io.connect(localhostURL, {
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
}); 

var escpos = require('escpos');
// Setup device and printer with the baudrate. 
// '/dev/cu.Repleo-PL2303-00002014'

var device, printer; 
device = new escpos.Serial('/dev/tty.usbserial-1410', {
    autoOpen: true,
    baudRate: 38400, 
});
printer = new escpos.Printer(device); 

// Clean Printer Routine (don't mess with this)
printer.feed(1);
printer.cut(0, 5);
printer.flush();

// BUG: Be aware this needs to be selected as ONCE here. 
socket.once('connect', () => {
    console.log('Connected'); 
    socket.on('printPayload', onPayload);
    socket.on('time', logTime); 
})

function logTime(time) {
    console.log('Socket Connection Alive: ' + time); 
}

function onPayload (payload) {
    console.log('New Print Payload Received'); 
    var date = payload['date']; 
    var time = payload['time']; 
    var message = payload['message'];
    message = cleanMessage(message); 

    try {
        // Printer commands to generate a receipt. 
        device.open(function() {
            // Set basic styles. 
            printer.encode('UTF-8');
            printer.setUpsideDown(true); 
            generateMessage(message);

            printer.newLine();

            generateHeader(date, time); 

            printer.newLine(); 
            // End routine. 
            //printer.cut(0, 5);

            printer.feed(1);
            printer.flush(); 
        });
    } catch (e) {
        console.log('Failure while printing: Check if we have run out of paper.');
        console.log(e); 
    }; 
}

function cleanMessage(msg) {
    let m = emoji.unemojify(msg); // Replace any emoji.
    return m; 
}  

function generateHeader(date, time) {
    // Defualt spacing for header section 
    // printer.spacing(); 
    // printer.lineSpace(); 
    printer.align('ct'); 

    // ------------- Date, Time ---------- // 
    
    // Font style. 
    printer.setReverseColors(false); 
    printer.font('a'); 
    printer.style('b'); 
    printer.size(1, 1); 

    printer.text('CHICAGO, USA'); 
    var t = date + ' ' + time; 
    printer.text(t);

    // Website

    printer.size(1, 1); 
    printer.setReverseColors(false);
    printer.setReverseColors(true); 
    printer.text(' momimsafe.live '); 

    // ------------- Title -------------- // 


    // Font style. 
    printer.size(2, 2); 
    printer.setReverseColors(true); 
    printer.newLine(); 
    printer.text(' MOMIMSAFE '); 
}

function generateMessage(message) {
    // ------------- Message -------------- // 
    printer.setReverseColors(false); 
    // printer.spacing(0); 
    // printer.lineSpace(0);
    printer.align('ct'); 
    printer.size(2, 2);

    let lines = message.split('\n'); 
    for (var i = lines.length-1; i >= 0; i--) {
        console.log('Printing: ' + lines[i]);
        linePrint(lines[i]); 
    }
}

function linePrint(line) {
    let words = line.split(' '); 
    let curLine = ''; // Empty string. 
    let lines = []; 
    for (var i = 0; i < words.length; i++){
        let curWord = words[i];
        let curNewLine = curLine + curWord + ' '; 
        if (curNewLine.length <= 24) {
            curLine = curNewLine;  
        } else {
            curLine.trim(); // Trim the white white space. 
            //printer.println(curLine); 
            lines.push(curLine); 
            curLine = curWord + ' '; // Reset current Line
        }
    }
    
    if (curLine.length > 0) {
        curLine.trim(); // Trim white space. 
        // Print the remaining character. 
        //printer.println(curLine);
        lines.push(curLine);
    }

    // For upside-down printing, we collect all the lines and then
    // print them from end to start. 
    for (var i = lines.length-1; i>=0; i--) {
        printer.println(lines[i]);
    }
}

// Read pg database (how will I do that?)
// How will I read the pg datbase starting off with node. 
// Read from database and then spit out all the receipts and then become active
// Because first
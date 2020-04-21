var io = require('socket.io-client'); 
var localhostURL = "http://localhost:5000/receipt"
var herokuURL = "https://blooming-refuge-71111.herokuapp.com/receipt";


var socket = io.connect(herokuURL, {
    reconnection: true, 
    reconnectionDelay: 500, 
    reconnectionAttempts: Infinity 
}); 

var escpos = require('escpos');
// Setup device and printer with the baudrate. 
// '/dev/cu.Repleo-PL2303-00002014'

var device, printer; 
device = new escpos.Serial('/dev/tty.Repleo-PL2303-00001014', {
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

    try {
        // Printer commands to generate a receipt. 
        device.open(function() {
            // Set basic styles. 
            generateHeader(date, time); 
            printer.newLine(); 
            generateMiddle(message);
            printer.cut(0, 5);
            printer.flush();  
        });
    } catch (e) {
        console.log('Failure while printing: Check if we have run out of paper.');
        console.log(e); 
    }; 
}

function generateHeader(date, time) {
    // Defualt spacing for header section 
    printer.spacing(); 
    printer.lineSpace(); 
    printer.setReverseColors(true); 
    printer.align('ct'); 

    // ------------- Title -------------- // 

    // Font style. 
    printer.font('b');
    printer.style('b');
    printer.size(2, 2); 

    printer.text(' MUMIMSAFE '); 
    printer.size(1, 1); 
    printer.setReverseColors(false);
    printer.newLine(); 
    printer.setReverseColors(true); 
    printer.text(' www.mumimsafe.live '); 
    printer.newLine(); 

    // ------------- Date, Time ---------- // 
    
    // Font style. 
    printer.setReverseColors(false); 
    printer.font('a'); 
    printer.style('b'); 
    printer.size(1, 1); 

    var t = date + ' ' + time; 
    printer.text(t);
}

function generateMiddle(message) {
    // ------------- Title -------------- // 
    printer.setReverseColors(true); 
    printer.text(' MESSAGE '); 
    printer.newLine();

    // ------------- Message -------------- // 
    printer.spacing(0); 
    printer.lineSpace(0);
    printer.align('ct'); 
    printer.size(1, 0.5);
    printer.text(message); 
    printer.newLine();
    printer.setReverseColors(false);
}
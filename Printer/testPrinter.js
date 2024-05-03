var escpos = require('escpos'); 
escpos.SerialPort = require('escpos-serialport');
var emoji = require('node-emoji');

var device, printer; 
device = new escpos.SerialPort('/dev/cu.usbserial-130', {
    autoOpen: true,
    baudRate: 38400, 
});
printer = new escpos.Printer(device); 

printer.feed(1); 
printer.cut(0, 5);
printer.flush();

print(); 


function print() {
    try {
        // Printer commands to generate a receipt. 
        device.open(function() {
            // Set basic styles. 
            printer.encode('UTF-8');
            printer.setUpsideDown(true); 
            printer.size(1, 1);
            printer.println('Hello Printer'); 
            printer.cut(0, 5); 
            printer.feed(1);
            printer.flush(); 
        });
    } catch (e) {
        console.log('Failure while printing: Check if we have run out of paper.');
        console.log(e); 
    }; 
}
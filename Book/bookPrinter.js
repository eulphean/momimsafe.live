// Author: Amay Kataria
// Date: 06/14/2020
// File: bookPrinter.js
// Description: Nodejs webserver that will help print the receipts for the artist book project. 
// It will read entries based on some inputs from a webclient and print them in receipts. It'll 
// bulk print the receipts for the artist book. 

var escpos = require('escpos'); 

var device, printer; 
device = new escpos.Serial('/dev/tty.Repleo-PL2303-00001014', {
    autoOpen: true,
    baudRate: 38400, 
});
printer = new escpos.Printer(device); 

printer.feed(1); 
printer.cut(0, 5);
printer.flush();

let i = 0; 

module.exports = {
    printMessages: async function(messages) {
        console.log('Printer: Printing entries.');

        // For each message, print the message. 
        try {
            device.open(async function(){
                // [NOTE] Don't put console.log in here.
                // It really fucks up the flow. 
                for (var m in messages) {
                    let payload = messages[m]; 
                    var date = payload['date']; 
                    var time = payload['time']; 
                    var message = payload['message'];

                    printer.encode('UTF-8');
                    generateHeader(date, time); 
                    printer.spacing(); 
                    printer.newLine(); 
                    generateMessage(message); 
                    printer.newLine();

                    // Final cut of the receipt. 
                    printer.feed(3);
                    printer.flush(); 

                    await sleep(2000);
                }
            });
        } catch(e) {
            console.log('Failure while printing: Check if we have run out of paper.');
            console.log(e); 
        }
    },

    cutPaper: function(){
        console.log('Cut Paper Command');

        try {
            device.open(function() {
                // Cut routine.
                printer.feed(1);
                printer.cut(0, 5);
                printer.flush();
            });
        } catch(e) {
            console.log('Failure to cut paper'); 
            console.log(e);
        }
    }
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 


// function printMessages (payload) {
//     console.log('New Print Payload Received'); 


//     try {
//         // Printer commands to generate a receipt. 
//         device.open(function() {
//             // Set basic styles. 
//             printer.encode('UTF-8');
//             generateHeader(date, time); 
//             printer.spacing(); 
//             printer.newLine(); 
//             generateMessage(message);
//             // End routine. 
//             //printer.cut(0, 5);
//             printer.feed(1);
//             printer.flush(); 
//         });
//     } catch (e) {
//         console.log('Failure while printing: Check if we have run out of paper.');
//         console.log(e); 
//     }; 
// }

function generateHeader(date, time) {
    // Defualt spacing for header section 
    printer.spacing(); 
    printer.lineSpace(); 
    printer.align('ct'); 

    // ------------- Title -------------- // 

    // Font style. 
    printer.size(2, 2); 
    printer.setReverseColors(true); 
    printer.text(' MOMIMSAFE '); 
    printer.size(1, 1); 
    printer.setReverseColors(false);
    printer.newLine(); 
    printer.setReverseColors(true); 
    printer.text(' momimsafe.live '); 

    // ------------- Date, Time ---------- // 
    
    // Font style. 
    printer.setReverseColors(false); 
    printer.font('a'); 
    printer.style('b'); 
    printer.size(1, 1); 

    printer.text('CHICAGO, USA'); 
    var t = date + ' ' + time; 
    printer.text(t);
}

function generateMessage(message) {
    // ------------- Message -------------- // 
    printer.setReverseColors(false); 
    // printer.spacing(0); 
    // printer.lineSpace(0);
    printer.align('ct'); 
    printer.size(2, 2);
    printer.text(message);
}
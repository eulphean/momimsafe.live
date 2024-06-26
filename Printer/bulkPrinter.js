// Author: Amay Kataria
// Date: 08/24/2020
// File: bulkPrinter.js
// Description: New module that abstracts all the printing into its own sub-module
// Inspured by the book printer that I wrote. This will be printing things upside down. 

var escpos = require('escpos'); 
var emoji = require('node-emoji');

var device, printer; 
device = new escpos.Serial('/dev/cu.usbserial-140', {
    autoOpen: true,
    baudRate: 38400, 
});
printer = new escpos.Printer(device); 

printer.feed(1); 
printer.cut(0, 5);
printer.flush();

let i = 0; 

module.exports = {
    printDumb: async function(message) {
        try {
            device.open(async function() {
                printer.encode('UTF-8');
                printer.text(message);
                printer.feed(3);
                printer.flush(); 
            });
        } catch (e) {
            console.log('Failure while printing.');
            console.log(e);
        }
    },

    // Modify
    printMessages: async function(messages, shouldCut = false) {
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
                    printer.setUpsideDown(true); 
                    generateMessage(message);
                    printer.newLine();
                    generateHeader(date, time); 

                    printer.feed(2);
                    printer.flush(); 

                    if (shouldCut) {
                        printer.cut(0, 5); 
                    }

                    await sleep(5000);
                }
            });
        } catch(e) {
            console.log('Failure while printing: Check if we have run out of paper.');
            console.log(e); 
        }
    },

    printPayload: function(payload) {
        // Process payload. 
        var date = payload['date']; 
        var time = payload['time']; 
        var message = payload['message'];

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
    
                printer.feed(2);
                printer.flush(); 
            });
        } catch (e) {
            console.log('Failure while printing: Check if we have run out of paper.');
            console.log(e); 
        }; 
    }, 

    cutPaper: function(){
        console.log('Cut Paper Command');

        try {
            device.open(function() {
                // Cut routine.
                //printer.feed(1);
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


function generateHeader(date, time) {
    // Defualt spacing for header section 
    printer.align('ct'); 
    printer.spacing(); 
    printer.lineSpace(); 

    // ------------- Date, Time ---------- // 
    // Font style. 
    printer.setReverseColors(false); 
    printer.font('a'); 
    printer.style('b'); 
    printer.size(1, 1); 

    // Date.
    var t = date + ' ' + time; 
    printer.text(t);
    // Time
    printer.text('CHICAGO, USA'); 
    
    // Website
    printer.size(1, 1); 
    printer.setReverseColors(true); 
    printer.text(' https://momimsafe.live '); 

    // ------------- Title -------------- // 

    printer.newLine();
    // Font style. 
    printer.size(2, 2); 
    printer.setReverseColors(true); 
    printer.text(' MOMIMSAFE '); 
}

function generateMessage(message) {
     // ------------- Message -------------- // 
    printer.setReverseColors(false); 
    printer.align('CT'); 
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
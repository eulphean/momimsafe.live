// Author: Amay Kataria
// Date: 08/24/2020
// File: bulkPrinter.js
// Description: New module that abstracts all the printing into its own sub-module
// Inspured by the book printer that I wrote. This will be printing things upside down. 

var escpos = require('escpos'); 

var device, printer; 
device = new escpos.Serial('/dev/tty.usbserial-1420', {
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
                    printer.newLine(); 

                    printer.feed(2);
                    printer.flush(); 

                    if (shouldCut) {
                        printer.cut(0, 5); 
                    }

                    await sleep(2000);
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
    let o = beautifyDate(date, time);  
    var t = o.date + ' ' + o.time; 
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

function beautifyDate(date, time) {
    let d = date.toString().split("T")[0]; 
    let t = time.toString().split(':');
    var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    d = d.split('-');
    d = new Date(d[0], d[1]-1, d[2], t[0], t[1], t[2]); 
    var obj = {
        date: d.toLocaleDateString('en-US', dateOptions),
        time: d.toLocaleTimeString('en-US')
    }
    return obj;
}

function cleanMessage(msg) {
    let m = emoji.unemojify(msg); // Replace any emoji.
    let cleanedMsg = m.replace(/(\r\n|\n|\r)/gm,"\n");
    return cleanedMsg; 
}  

// Author: Amay Kataria
// Date: 06/14/2020
// File: bookPrinter.js
// Description: Nodejs webserver that will help print the receipts for the artist book project. 
// It will read entries based on some inputs from a webclient and print them in receipts. It'll 
// bulk print the receipts for the artist book. 

var escpos = require('escpos'); 

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
                    generateHeader(date, time); 
                    printer.spacing(); 
                    printer.newLine(); 
                    generateMessage(message); 
                    //printer.newLine();

                    printer.feed(1);
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
    printer.spacing(); 
    printer.lineSpace(); 
    printer.align('CT'); 

    // ------------- Title -------------- // 

    // Font style. 
    printer.size(2, 2); 
    printer.setReverseColors(true); 
    printer.text(' MOMIMSAFE '); 
    printer.size(1, 1); 
    printer.setReverseColors(false);
    printer.newLine(); 
    printer.setReverseColors(true); 
    printer.text(' https://momimsafe.live '); 

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
}

function generateMessage(message) {
    // ------------- Message -------------- // 
    printer.setReverseColors(false); 
    printer.align('CT'); 
    printer.size(2, 2);
    
    let lines = message.split('\n'); 
    for (var i = 0; i < lines.length; i++) {
        linePrint(lines[i]); 
    }
}

function linePrint(line) {
    let words = line.split(' '); 
    let curLine = ''; // Empty string. 
    for (var i = 0; i < words.length; i++){
        let curWord = words[i];
        let curNewLine = curLine + curWord + ' '; 
        if (curNewLine.length <= 24) {
            curLine = curNewLine;  
        } else {
            curLine.trim(); // Trim the white white space. 
            printer.println(curLine); 
            curLine = curWord + ' '; // Reset current Line
        }
    }
    
    if (curLine.length > 0) {
        curLine.trim(); // Trim white space. 
        // Print the remaining character. 
        printer.println(curLine);
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

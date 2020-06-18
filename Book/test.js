let message = "hi love\ngood morning.\nhave a happy day today for yourself\npapa"; 
// Maximum characters a line can hold is 24 characters with this size. 
// I like the size and I want to keep this size. 

let lines = message.split('\n'); 
for (var i = 0; i < lines.length; i++) {
    linePrint(lines[i]); 
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
            console.log(curLine); // Print the line on the printer. (center align it)
            curLine = curWord + ' '; // Reset current Line
        }
    }
    
    if (curLine.length > 0) {
        // Print the remaining character. 
        console.log(curLine); // Print the line on the printer. (center align it)
    }
}
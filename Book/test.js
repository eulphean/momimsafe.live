
var emoji = require('node-emoji');

function convert(entry) {
    let msg = entry.message; 
    let res = msg.replace(/(\r\n|\n|\r)/gm,"\n");
    console.log(res);
}

let o = {message: "hello\r\namay\r\n\ajat", i: 0};

convert(o);
let a = emoji.emojify('I :heart: :coffee:');
let b = emoji.hasEmoji("keep up the good work amay! you will achieve new heights. but don't forget me and meet me when you are in india.😀😗😄");
console.log(a);
console.log(b);
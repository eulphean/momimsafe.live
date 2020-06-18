
function convert(entry) {
    let msg = entry.message; 
    let res = msg.replace(/(\r\n|\n|\r)/gm,"\n");
    console.log(res);
}

let o = {message: "hello\r\namay\r\n\ajat", i: 0};

convert(o);
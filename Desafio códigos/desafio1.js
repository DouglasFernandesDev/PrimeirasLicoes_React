var input = require("fs").readFileSync("stdin", "utf8");
console.log(input);


const PI = 3.14159;
let R = parseFloat(input);

// (4/3) * pi * R3

var volumeEsfera = (4/3) * PI * Math.pow(R, 3);
console.log("VOLUME = " + volumeEsfera.toFixed(3));
"use strict";

Object.prototype.in = function() {
    for (var i=0; i<arguments.length; i++)
       if (arguments[i] == this) return true;
    return false;
}

//var MAX_NUMBER = 60;
var MAX_NUMBER = 2;
function random() {
    var number = Math.round (Math.random(), MAX_NUMBER) + 1;
    console.log ("random number: "+number);
    return number;
}

var counter = 0;
//var winners = [16, 19, 32, 34, 57, 13];
var winners = [1, 2, 1, 2, 1, 2];

for (var j = 0; j < winners.length; j++) {
    console.log("j "+j+" winners[j] "+winners[j]);
}
console.log ("length "+winners.length);

while (true) {
    console.log("First Number");
    counter++;
    if (random() !== winners[0]) continue;

    console.log("Second Number");
    counter++;
    if (random() !== winners[1]) continue;

    console.log("Third Number");
    counter++;
    if (random() !== winners[2]) continue;

    break;
}

console.log ("Counter :"+counter);

//var jv = random();
//console.log ("jv "+jv);
//
//if (jv === 1) {
//    console.log("jv is 1");
//}
//
//if (jv === winners[0]) {
//    console.log("jv is winners[0]");
//}

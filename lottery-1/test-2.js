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

var jv = random();
console.log ("jv "+jv);
if (jv.in(1, 4)) {
    console.log("jv is in");
}
else {
    console.log("jv NOT in");
}

"use strict";

//var MAX_NUMBER = 60;
var MAX_NUMBER = 2;

var counter = 0;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Object.prototype.get_random = function() {
    while (true) {
        counter++;
        var rand = getRandomInt(1, MAX_NUMBER);
        console.log ("random number: "+rand);

        if (! check_list(arguments, rand)) return rand;
    }
}

function check_list (args, rand) {
    for (var i=0; i<args.length; i++)
       if (args[i] == rand) return true;
    return false;
}

var myObject = new Object();
var jv = myObject.get_random(1, 4);
console.log ("jv "+jv);

var jv1 = myObject.get_random(3, 4, 5);
console.log ("jv1 "+jv1);

console.log("counter "+counter);

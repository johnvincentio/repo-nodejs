"use strict";

var MAX_NUMBER = 59;
//var MAX_NUMBER = 6;

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
        var rand = getRandomInt(1, MAX_NUMBER);
//        console.log ("random number: "+rand);

        if (! check_list(arguments, rand)) {
            counter++;
            return rand;
        }
    }
}

function check_list (args, rand) {
    for (var i=0; i<args.length; i++)
       if (args[i] == rand) return true;
    return false;
}

var myObject = new Object();

var winners = [16, 19, 32, 34, 57, 13];
//var winners = [1, 2, 3, 4, 5, 6];

for (var j = 0; j < winners.length; j++) {
    console.log("j "+j+" winners[j] "+winners[j]);
}
console.log ("length "+winners.length);

while (true) {
//    console.log("First Number");
    var jv_1 = myObject.get_random();
    if (jv_1 !== winners[0]) continue;

//    console.log("Second Number");
    var jv_2 = myObject.get_random(jv_1);
    if (jv_2 !== winners[1]) continue;

//    console.log("Third Number");
    var jv_3 = myObject.get_random(jv_1, jv_2);
    if (jv_3 !== winners[2]) continue;

//    console.log("Fourth Number");
    var jv_4 = myObject.get_random(jv_1, jv_2, jv_3);
    if (jv_4 !== winners[3]) continue;

//    console.log("Fifth Number");
    var jv_5 = myObject.get_random(jv_1, jv_2, jv_3, jv_4);
    if (jv_5 !== winners[4]) continue;

//    console.log("Sixth Number");
    var jv_6 = myObject.get_random(jv_1, jv_2, jv_3, jv_4, jv_5);
    if (jv_6 !== winners[5]) continue;

    break;
}

console.log ("Counter :"+counter);

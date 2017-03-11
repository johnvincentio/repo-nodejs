'use strict';

var testOne = function() {
    console.log('test one');
};
var testTwo = function() {
    console.log('test Two');
};
var test3 = function() {
    console.log('test 3');
};

module.exports.testOne = testOne;
module.exports.testTwo = testTwo;
module.exports.testThree = test3;

function jv() {
    console.log("in jv");
}

jv();

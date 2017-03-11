'use strict';

exports.sayHelloInEnglish = function() {
    return "HELLO";
};

exports.sayHelloInSpanish = function() {
    return "Hola";
};

// module.exports = "Bonjour";

console.log("--- greetings");

console.log("--- greetings"+exports.sayHelloInEnglish());

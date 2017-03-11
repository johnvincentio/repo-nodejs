'use strict';

module.exports = {
    sayHelloInEnglish: function() {
        return "HELLO";
    },

    sayHelloInSpanish: function() {
        return "Hola";
    }
};

console.log("in greetings");

console.log("in greetings "+module.exports.sayHelloInEnglish());

var jv = module.exports;
console.log("in greetings "+jv.sayHelloInEnglish());

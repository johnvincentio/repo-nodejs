'use strict';

module.exports = function(firstArg, secondArg, thirdArg) {
    var jv = secondArg;
    var jv1 = thirdArg;

    function firstFunction(firstArg) {
        console.log("firstFunction; "+firstArg);
    }

    function secondFunction() {
        console.log("secondFunction; "+jv+","+jv1);
    }

    function thirdFunction() {
        console.log("thirdFunction");
    }

    return {
        firstFunction: firstFunction,
        secondFunction: secondFunction,
        thirdFunction: thirdFunction
    };

};
//
//var jv = module.exports;
//console.log(jv.firstFunction);
//

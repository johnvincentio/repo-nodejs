/*
https://dzone.com/articles/how-write-and-unit-test
*/

'use strict';

var moduleName = require("./module.js");
var cleaner = new moduleName.Cleaner();

//var cleaner = new Cleaner();

var text = cleaner.clean('te"st " see');
console.log("text :" + text + ":");

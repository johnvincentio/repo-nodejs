'use strict';

var Cleaner = require("./module.js");

var cleaner = new Cleaner();

var text = cleaner.clean('te"st " see');
console.log("text :" + text + ":");

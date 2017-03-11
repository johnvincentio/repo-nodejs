
'use strict';

var assert = require('assert');
var moduleName = require("./module.js");
var cleaner = new moduleName.Cleaner();

var text = cleaner.clean('te"st " see');
console.log("text :" + text + ":");
assert.equal(text, 'test  see');

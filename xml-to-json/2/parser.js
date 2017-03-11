/*
npm init
npm i xml2json --save -dev
*/

/* global require */

var fs = require('fs');
var parser = require('xml2json');

fs.readFile('1.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log(json);
});

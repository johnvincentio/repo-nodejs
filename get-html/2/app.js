/*
npm install jsdom jquery --save-dev
*/

var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;

jsdom.jQueryify(window, "http://codingheroes.io/resources/", function() {
    var $ = window.$;
    var jv = $('article');
    console.log(jv);
});

/*
jsdom.jQueryify(window, "http://codingheroes.io/resources/", function() {
    var $ = window.$;
    $("body").prepend("<h1>The title</h1>");
    console.log($("h1").html());
});
*/

/*
npm i jQuery --save-dev
npm i jsdom --save-dev

error:
require(...).jsdom(...).createWindow is not a function

var $ = require('jQuery');

$.getJSON('http://codingheroes.io/resources/',function(data) {
  console.log(data);
});
*/

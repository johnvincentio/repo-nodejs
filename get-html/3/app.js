/*
npm i node-jsdom --save-dev

node-jsdom broke devtool.

DO NOT USE this.
*/

// Dismantle html page, extract the goodies and write to a file.

var jsdom = require("node-jsdom");

jsdom.env({
    url: "http://codingheroes.io/resources/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function(errors, window) {
        var $ = window.$;
        console.log("HN Links");
        $("article").each(function(item) {
            console.log(" -", $(this).text());
        });
    }
});

/*

jsdom.env({
    url: "http://news.ycombinator.com/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function(errors, window) {
        var $ = window.$;
        console.log("HN Links");
        $("td.title:not(:last) a").each(function() {
            console.log(" -", $(this).text());
        });
    }
});
*/

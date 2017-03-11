/*
npm i request --save-dev
npm i cheerio --save-dev

https://github.com/cheeriojs/cheerio
*/

var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");

var writeStream = fs.createWriteStream("data.js");
writeStream.write("var APP = APP || {};\n\n");

var template1 = 'var data = APP.data.addData("{{2}}", "{{1}}");';

request('http://codingheroes.io/resources/', function(error, response, body) {
    if (! error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        $('section.group').each(function() {
            var a1 = $('header > h2', this).text();
            var a2 = $('header > h2 > i', this).attr('class').replace('group__heading--icon', '').trim();
            writeStream.write(template1.replace('{{1}}', a1).replace('{{2}}', a2)+"\n");

            var resall = $('article .resource', this);
            resall.each(function() {
                writeStream.write("APP.data.addItem(data,\n");
                var a3 = $('img', this).attr('src').replace('img/logos/', '').trim();
                var a4 = $('h3 > a', this).attr('href').trim();
                var a5 = $('h3 > a', this).text().trim();
                var a6 = $('p', this).text().trim();
                var a7 = a6.replace(/"/g, '\\"');
                writeStream.write('"'+a3+'",\n');
                writeStream.write('"'+a4+'",\n');
                writeStream.write('"'+a5+'",\n');
                writeStream.write('"'+a7+'"\n');
                writeStream.write(");\n");
                writeStream.write("APP.model.add(data);\n\n");
            });
        });
    }
    writeStream.end();
});

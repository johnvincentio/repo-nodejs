'use strict';

var http = require('http');
var host = '127.0.0.1';
var port = '9000';

var server = http.createServer(function (req, res) {
	res.writeHead (200, { 'Content-Type' : 'text/html'});
	res.write ('<h1>Hello World! </h1>');
    setTimeout(function() {
        res.end ('<h2>goodbye </h2>');
        console.log("world");
    }, 5000);
}).listen (port, host, function() {
	console.log ('Server running on http://' + host + ':' + port);
});

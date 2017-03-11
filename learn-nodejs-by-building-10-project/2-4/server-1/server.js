"use strict";

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mimeTypes = {
    "html" : "text/html",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpeg",
    "png" : "image/png",
    "js" : "text/javascript",
    "css" : "text/css"
};

// Create server

http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), unescape(uri));
    console.log("Loading " + uri);
    console.log ("filename :"+filename+":");
    var stats;
    try {
        stats = fs.lstatSync(filename);
    }
    catch(e) {
        res.writeHead(404, {'Content-type' : 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
    }

    if (stats.isFile()) {
        var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
        var a1 = path.extname(filename);
        console.log("a1 "+a1);
        var a2 = a1.split(".");
        console.log("a2 "+a2);
        var a3 = a2.reverse();
        console.log("a3 "+a3);

        console.log ("mimeType "+mimeType);
        res.writeHead(200, {'Content-type' : mimeType});

        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);
    }
    else if (stats.isDirectory()) {
        res.writeHead(302, {'Location' : 'index.html'});
        res.end();
    }
    else {
        res.writeHead(500, {'Content-type' : 'text/plain'});
        res.write('500 Internal Error\n');
        res.end();
    }
}).listen(3000);

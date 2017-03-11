var fs = require ("fs");
var fn = "stream.txt";
var output = fs.createWriteStream(fn);
output.write ("mickey");
output.write ("mouse");
output.end();
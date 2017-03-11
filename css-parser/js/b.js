
/*
use: npm install css
*/

var css = require('css');
var fs = require('fs');

fs.readFile('../css/style.css', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);

    var obj = css.parse(data, { source: '../css/style.css'});
    var result = css.stringify(obj, {sourcemap: true});
    console.log(result.code);
    console.log(result.map);
});

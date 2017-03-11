/*
use: npm install css
*/

var css = require('css');
var fs = require('fs');

try {
    var data = fs.readFileSync('../css/style.css', 'utf8');
    console.log (data);

    var obj = css.parse(data, { source: '../css/style.css'});
    var result = css.stringify(obj, {sourcemap: true});
    console.log(result.code);
    console.log(result.map);

}
catch (e) {
    console.log('Error:', e.stack);
}

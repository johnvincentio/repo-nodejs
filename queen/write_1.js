var fs = require("fs");
console.log ("stage 1");
fs.writeFile ('message.txt', 'Hello Node', function (err) {
	  if (err) throw err;
	  console.log('It\'s saved!');
});
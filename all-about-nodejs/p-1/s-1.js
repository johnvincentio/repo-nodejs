var fs = require("fs");
fs.readFile("my-note.txt", "utf8", function(error, content) {
    console.log(content);
});

console.log ("Date/time " + new Date());
console.log ("Hours " + new Date().getHours());
console.log ("Minutes " + new Date().getMinutes());

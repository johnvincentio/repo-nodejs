
const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = '9000';

app.use ('/', express.static('src'));

app.listen (port, host, function() {
	console.log ('Server running on http://' + host + ':' + port);
});

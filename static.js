var express = require('express');

var app = express();

var port = process.argv[2];

var location = process.argv[3];

app.use(express.static(location || path.join(__dirname, 'public')));

app.listen(port);
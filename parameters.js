var express = require('express');
var crypto = require('crypto');

var app = express();
var port = process.argv[2];
var location = process.argv[3];
var shasum = crypto.createHash('sha1');

crypto.update(new Date().toDateString() + id);
crypto.digest('hex');

app.put('/message/:id', function(req, res){

});

app.listen(port);

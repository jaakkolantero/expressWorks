var express = require('express');

var jade = require('jade');

var app = express();

var port = process.argv[2];

var location = process.argv[3];



app.set('views', location);


app.set('view engine', 'jade');

app.get('/home',function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});




app.listen(port);
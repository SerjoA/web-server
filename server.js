var express = require('express');
var middlewere = require('./middlewere');

var app = express();
var PORT = proccess.env.PORT || 3000;

app.use(middlewere.logger);

app.get('/', function(request, response) {
	response.send('Hello World From NodeJS');
});

app.get('/about', middlewere.requireAuthentication, function(req, res) {
	res.send('This is about us page');

});

app.use('/pub', express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express site started at port: ' + PORT );
});
var express = require('express');

var app = express();
var PORT = 3000;

var middlewere = {
	
	requireAuthentication: function(req, res, next) {
		console.log('Private route hit!!');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + 
					 req.method + req.originalUrl );
		next();
	}
}

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
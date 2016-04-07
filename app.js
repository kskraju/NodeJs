var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	
	res.render('index');
	
});
console.log('......');
app.listen(port);


var fs = require('fs');

var fun1 = function(err, data){
	if(err)
		throw err;
	if(data)
		console.log(data);
};



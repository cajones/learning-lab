var http = require('http');
var express = require('express');
var blackjack = require('./blackjack');


var hosting = {
	port : process.argv[2] 
			|| process.env.PORT 
			|| process.env.C9_PORT 
			|| 80
};


var application = express.createServer();

application.configure(function() {
	application.use(express.static(__dirname + '/public'));
	application.set('view engine', 'jade');
	application.set('view options', {layout:false});
});


application.get('/', function(req, res){

	var hand = new blackjack.Hand();
	res.render('index.jade', hand);
});

application.listen(hosting.port);
var http = require('http');

var hosting = {
	port : process.argv[2] || 80
};
console.log(hosting.port);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Goodbye Cruel World\n');
}).listen(hosting.port);
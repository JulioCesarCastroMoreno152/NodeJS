var http = require ('http');
var fs = require ('fs');
var url = require ('url');

http.createServer(function (reg,res) {
	var q = url.parse(reg.url, true);
	var filename = "." +q.pathname;
	fs.readFile(filename, function (err,data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end('404 Not Found');
		}
		 	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	return res.end();
});
}).listen(8080);

console.log('Server Listening on port 8080...')
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
	    if (request.method === 'GET' && request.url === '/') {
	       fs.readFile('./index.html', 'utf-8', function (err, data){
	       		response.write(data);
				response.end();
				if (err) {
					fs.readFile('./cat.png', 'binary', function(err, file) {
			        	response.writeHead(200, {'Content-Type': 'image/png'});
			        	response.write(file, 'binary');
			        	response.end();
		    		});
				}
			});
	    }
		
});

server.listen(7000);
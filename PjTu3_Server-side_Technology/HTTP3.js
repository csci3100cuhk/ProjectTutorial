var http = require("http");
http.createServer(
	function(request, response) {
		if (request.url === "/foo") {
			response.end("This is a demo of CSCI3 3100 Project Tutorial 3. Hello HTTP!");}
		else {
			response.statusCode = 404;
			response.end();
		}
	}).listen(8001);
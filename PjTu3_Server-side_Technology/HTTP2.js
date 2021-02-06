var http = require("http");
var server = http.createServer(
	function(request, response) {
		var requestLine = request.method + " " + request.url + " HTTP/" + request.httpVersion;
		console.log(requestLine);
		response.end();
	}
	);
server.listen(8000);
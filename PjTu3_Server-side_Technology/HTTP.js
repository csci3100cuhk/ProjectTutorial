var http = require("http");
var server = http.createServer(
	function(request, response) {
		response.write("This is a demo of CSCI3 3100 Project Tutorial 3. Hello HTTP!");
		response.end();
	}
	);
server.listen(8000);

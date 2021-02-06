var http = require("http");
http.createServer(
	function(request, response) {
		if (request.url === "/" && request.method === "GET") {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end("Hello <strong>home page</strong>");
		} 
		else if (request.url === "/bar" && request.method === "GET") {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end("Hello <strong>bar</strong>");
		} 
		else {
			response.writeHead(404, {"Content-Type": "text/html"});
			response.end("404 Not Found");
		}
	}
	).listen(8001);

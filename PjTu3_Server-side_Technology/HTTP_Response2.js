var express = require("express");
var http = require("http");
var app = express();
app.get(/\/products\/([^\/]+)\/?$/, 
	function(req, res, next) {
		res.send("Requested " + req.params[0]);
	}
	);
http.createServer(app).listen(8001);
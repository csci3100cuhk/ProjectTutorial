var net = require("net");
var server = net.createServer(
	{allowHalfOpen: false}, 
	function(socket) {socket.end("This is a demo of CSCI3100 Project Tutorial 3.\nHello and Goodbye!\n");}
	);
server.listen(8000, "127.0.0.1");
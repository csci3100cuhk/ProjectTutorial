var dgram = require("dgram");
var server= dgram.createSocket("udp4", 
	function(msg, rinfo) {
		console.log("received " + rinfo.size + " bytes");
		console.log("from " + rinfo.address + ":" + rinfo.port);
		console.log("message is: " + msg.toString());
	}
			);
server.bind({
	port:8012,
	address:"localhost"
	},
	function() {
		console.log("bound to ");
		console.log(server.address());
	}
			);
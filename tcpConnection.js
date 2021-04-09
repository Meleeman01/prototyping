const net = require("net");

const server = net.createServer(socket => {
	socket.write('hello');
	socket.on("data", data => {
		console.log(data.toString());
	})
});

server.listen(8080);

//use bash utility telnet to connect to this server, an send messages back and forth. telnet 127.0.0.1 8080

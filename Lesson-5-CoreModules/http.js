const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello world!!");
	} else if (req.url === "/about") {
		res.write("This is about page");
	} else {
		res.write("Not found");
	}
	res.end();
});

server.listen(5000);

console.log("Server is runing on port 5000");

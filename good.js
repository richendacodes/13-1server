var http = require('http');

var PORT = 7000;

var handleRequest = function (req, res) {
  res.end("You are a good person.");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});
var http = require('http');

var PORT = 8080;

var handleRequest = function (req, res) {
  res.end("It worked! You hit: " + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});
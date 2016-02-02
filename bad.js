var http = require('http');

var PORT = 7500;

var handleRequest = function (req, res) {
  res.end(item);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

var item = badThings[Math.floor(Math.random()*badThings.length)];
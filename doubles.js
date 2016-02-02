var http = require('http');

var PORT = 7000;

var handleRequest = function (req, res) {
  res.end("You are a good person.");
}

var server7000 = http.createServer(handleRequest);

server7000.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

/* ------------------------------------------------------------------------*/

var PORT2 = 7500;

var handleRequest2 = function (req, res) {
  res.end("BOOOO you.");
}

var server7500 = http.createServer(handleRequest);

server7500.listen(PORT2, function() {
  console.log("Server is listening at http://localhost:%s", PORT2);
});

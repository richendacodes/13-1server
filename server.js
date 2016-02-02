 var http = require('http');

 var PORT = 8080;

 var server = http.createServer(function (req, res) {
  res.end("It worked! You hit: " + req.url);
 });

 server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT)
 });
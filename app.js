var http = require('http'), url = require('url');

var express = require('express');
var app = express();

var PORT = 8080;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!');
});

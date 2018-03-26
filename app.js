var express = require('express');
var app = express();
var server = require('http').createServer(app);

// maps /static folder to the root
app.use(express.static(__dirname + '/static')); 

// start listening 
server.listen(3000, function () {
  console.log('Example JS service is listening on http://localhost:3000');
});
var express = require('express');
var program = express();

program.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = program.listen(3010, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example program listening at http://%s:%s', host, port);

});
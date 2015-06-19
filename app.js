var express = require('express');
var app = express();
var about = require('./controller/about');


app.use('/static', express.static('public'));

app.get('/', function (req, res) {
	res.send('Bonjour');
});

var server = app.listen(3000, function () {
  
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

app.use('/about', about);


// will match request to /random.text
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
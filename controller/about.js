var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
	console.log('about is called', (new Date()));
});

router.get('/', function(req, res) {
	res.send('about page');
});

router.get('/toto', function(req, res) {
	res.send('toto about page');
})

module.exports = router;
var fs = require('fs');

// console.log(fs.readFile('./package.json'));
fs.readFile('./package.json', {encoding: 'utf-8'}, function(err, data) {
	console.log(data);
});


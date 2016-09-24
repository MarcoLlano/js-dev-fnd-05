//Read file async
var fs = require('fs');
var fileName = process.argv[2];

var cb = function(err, data) {
	
	if (err) {
		throw 'Error reading the file';
	}
	
	console.log(data.toString());
};

fs.readFile(fileName, cb);

console.log('This is the last line');

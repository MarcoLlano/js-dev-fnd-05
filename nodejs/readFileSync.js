var fs = require('fs');
var fileName = process.argv[2];

var result = fs.readFileSync(fileName);

console.log(result.toString());
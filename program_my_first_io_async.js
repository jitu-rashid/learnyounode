var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, 'utf8', function (err, data) {
  var countNewLines;

  if (!err) {
    countNewLines = data.split('\n').length - 1;
    console.log(countNewLines);
  }
});

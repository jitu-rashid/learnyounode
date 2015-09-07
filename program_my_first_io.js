var fs = require('fs');

var fileName,
    data,
    convertBufferToString,
    splitString,
    countNewLines

  // get filename from arguments
  fileName = process.argv;

  // get contents from the file
  data = fs.readFileSync(fileName[2]);

  // convert buffer to string
  convertBufferToString = data.toString();

  // split string into array by new line
  splitString = convertBufferToString.split('\n');

  // get length of the array minus the extra new line
  countNewLines = splitString.length - 1;
  console.log(countNewLines);

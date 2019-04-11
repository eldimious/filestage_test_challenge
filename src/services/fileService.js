const util = require('util');
const fs = require('fs');

const read = util.promisify(fs.readFile);

async function readFile(fileName, encoding) {
  return read(fileName, encoding);
}

module.exports = {
  readFile,
};

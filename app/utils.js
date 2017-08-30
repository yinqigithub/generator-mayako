const fs = require('fs');
const path = require('path');

function read(root, filter, files, prefix) {
  prefix = prefix || '';
  files = files || [];
  filter = filter || noDotFiles;

  const dir =__dirname+'/'+ path.join(root, prefix);
  if (!fs.existsSync(dir)) return files;
  
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir)
      .filter(filter)
      .forEach(function (name) {
        read(root, filter, files, path.join(prefix, name));
      });
  else
    files.push(prefix);

  return files
}

function noDotFiles(x) {
  return x[0] !== '.';
}

module.exports = {
  read
};
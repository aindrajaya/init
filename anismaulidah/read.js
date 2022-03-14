const fs = require('fs');

fs.readFile('coba-nodejs.html', function(err, data) {
  if(err) throw err;
  console.log(data.toString('utf-8'));
})
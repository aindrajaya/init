const fs = require('fs');

fs.readFile('index.html', function(err, data){
  if(err) throw err;
  console.log(data.toString('utf-8'));
  // console.log(data.toJSON());
})

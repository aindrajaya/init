const fs = require('fs')

const content = 'Goodbye world!'

fs.writeFile('test.txt', content, function(err) {
    if (err) throw err;
    console.log('The file has been created!');
});
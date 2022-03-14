const fs = require('fs');

//Penamaan variabel untuk js biasanya pakai camelCase
const isiKonten = 'Hello world';

fs.writeFile('newfile.txt', isiKonten, function(err){
    if(err) throw err;
    console.log('File Created')
});
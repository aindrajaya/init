const fs = require('fs');

const isiKonten = 'Ini adalah Konten';

fs.writeFile('fileBaru.txt', isiKonten, function (err) {
  if (err) throw err;
  console.log('File Created');
});

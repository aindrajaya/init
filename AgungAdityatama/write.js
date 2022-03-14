const fs = require('fs');

const isiKonten = 'Halo nama saya Agung Adityatama, salam kenal!';

fs.writeFileSync('kenalan.txt', isiKonten, function(err) {
    if (err) throw err;
    console.log('File Created');
});
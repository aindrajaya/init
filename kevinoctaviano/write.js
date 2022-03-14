const fs = require('fs');

// isi konten
const content = 'Ini konten Kevin Octaviano';
const filePath = './content.txt';

fs.writeFileSync(filePath, content, 'utf-8');



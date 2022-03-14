const fs = require('fs');
const file = './index.html';
console.log(fs.readFileSync(file, 'utf-8'));
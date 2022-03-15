const fs = require('fs');

// isi konten
const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello, Kevin Octaviano!</h1>
</body>

</html>`;
const filePath = './index.html';

fs.writeFileSync(filePath, html, 'utf-8');



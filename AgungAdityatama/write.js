const fs = require('fs');

const isiKonten = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Halo Semua</h1>
    <h2>Kenalin saya Adit</h2>
    <h2>Salam kenal</h2>
</body>

</html>
`;

fs.writeFileSync('kenalan.html', isiKonten, function(err) {
    if (err) throw err;
    console.log('File Created');
});
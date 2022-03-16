const express = require("express");
const app = express();
const port = 80;

let data = "String dari variable"
let html1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div style ="background-color: red">
       <h1>Halo kelas fe js 7</h1>
    </div>
</body>

</html>
`;

let html2 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div style ="background-color: blue">
       <h1>Halo kelas fe js 7 - halaman 2</h1>
    </div>
</body>

</html>
`;

app.get('/', (req, res) => res.send(html1));
app.get('/baru', (req, res) => res.send(html2))

app.listen(port, () => console.log(`This example app listening at http://localhost:${port}`));
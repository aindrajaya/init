const express = require('express');
const app = express();
const port = 3005;
// const port = 80; //port istimewa, gaperlu tulis portnya

//ganti halaman gaperlu ganti port
let data = "String dari variable";
let html1 = 
`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style= "background-color:red">
    <h1>hello world</h1>
    </div>
</body>
</html>`;

let html2 =
`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style= "background-color:blue">
    <h1>Halo Kampus Merdeka</h1>
    </div>
</body>
</html>`;


app.get('/', (req,res) => res.send(html1));
app.get('/baru', (req,res) => res.send(html2));

app.listen(port, () => console.log (`This ecample App listening at http://localhost:${port}`));
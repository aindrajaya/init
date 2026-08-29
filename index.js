const express = require('express') ;
const res = require('express/lib/response');
const app = express();
const port = 80;

let data = "ini String"
let html = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello
</body>
</html>
`

app.get('/',(req,res) => res.send(data));
app.get('/baru',(req,res) => res.send(html));

app.listen(port, () => console.log(`This example app listening as https://localhost:${port}`))
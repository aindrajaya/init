const express = require("express");
const app = express();
const port = 3005;

let data = "string from let data";
let html =  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello abilio</h1>
    
</body>
</html>`
;

app.get("/", (req, res) => res.send(html));
app.get("/baru", (req, res) => res.send(data));


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));

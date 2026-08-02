const express = require("express");
const app = express();
const port = 3000;

const isiKonten = "Haloo Apa Kabar";
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <p>Hallo selamat malam</p>
</body>
</html>`;

app.get("/", (req, res) => res.send(isiKonten));
app.get("/html", (req, res) => res.send(html));

app.listen(port, () => console.log(`Example app listening at port ${port}`));

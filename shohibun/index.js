const express = require("express");
const app = express();
// eslint-disable-next-line no-unused-vars
const PORT = 3000;

// eslint-disable-next-line no-unused-vars
let html1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div style="background-color: red">
        <h1>Hello, Binar Academy!</h1>
    </div>
</body>

</html>`;

// eslint-disable-next-line no-unused-vars
let html2 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div style="background-color: blue">
        <h1>Hello, Shohibun Najam Ilma!</h1>
    </div>
</body>

</html>`;

app.get("/", (req, res) => res.send(html1));
app.get("/selanjutnya", (req, res) => res.send(html2));
app.listen(PORT, () => console.log(`This example App Listening at http://localhost:${PORT}`));

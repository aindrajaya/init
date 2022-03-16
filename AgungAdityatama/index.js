const express = require('express');
const app = express();
const port = 3005;

let data = "String dari Variable";
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
    <div style="background-color: red">
        <h1>Ini bentuk HTML ya gaes</h1>
    </div>
</body>

</html>
`

app.get('/', (req, res) => res.send(html));
app.get('/hal2', (req, res) => res.send(data));

app.listen(port, () => console.log(`This example App listening at http://localhost:${port}`));
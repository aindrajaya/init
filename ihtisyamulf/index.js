const express = require("express");
const app = express();
const port = 3007;

//let data = "string dari variable";
let html1 =
`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman 2</title>
</head>
<body>
   <div style="background-color: red"> 
    <h1>Hello Kelas FE JS 7</h1>
    </div>
</body>
</html>
`
;

let html2 = 
`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman 2</title>
</head>
<body>
   <div style="background-color: blue"> 
    <h1>Hello Kelas FE JS 7</h1>
    </div>
</body>
</html>
`;
app.get("/", (req, res) => res.send(html1));
app.get("/baru", (req, res) => res.send(html2));

app.listen(port, () => console.log(`This example App listening at http://localhost:${port}`));
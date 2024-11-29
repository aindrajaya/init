const express = require("express");
const app = express();
const port = 3005;

let data1 = "String dari variable";
let html1 = 
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
    <h1>Hallo Kelas Malam</h1>
</body>
</html>
`;

// let data = [1
//     {"user id" : 1,
//     "id" : 22
// }];

//routes
app.get("/", (req,res)=> res.send(data1));
app.get("/baru", (req,res)=> res.send(html1));

app.listen(port, () => console.log(`This example App listening at http://localhost:${port}`));
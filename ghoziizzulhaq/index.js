const express = require ("express");
const app = express();
const port = 3005;

let data ="String dari Variabel data";
let html = 
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  <div style="backround-colour :red">
  <h1>Halo Kelas FEJS-7</h1>
  </div>
  </body>
</html>
`

app.get('/', (req,res) => res.send(html));
app.listen(port, () => console.log(`This example app listening at http://localhost:${port}`));
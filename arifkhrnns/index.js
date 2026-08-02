const express = require('express');
const app = express();
const port = 3005;

let data = 'String dari variabel'
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpressJS</title>
</head>
<body>
    <div style="background-color:powderblue;">
        <h1>Testing express js</h1>
    </div>
</body>
</html>
`


app.get('/', (req,res) => res.send(data));
app.get('/html', (req,res) => res.send(html));

app.listen(port, () => console.log('This Examples App listening at http://localhost:${port}'));


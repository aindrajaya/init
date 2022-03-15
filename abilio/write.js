const fs = require("fs");

const content = 
`<!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
        <body>
            <h1>Goodbye world</h1>
        </body>
    </html>`;

fs.writeFile("test.html", content, function(err) {
    if (err) throw err;
    console.log("The file has been created!");
});
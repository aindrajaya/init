import { writeFile } from "fs";


const isikonten = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> hello world </h1>
    <h1> hello world dari index.js
</body>
</html>`;

writeFile("coba.html", isikonten, function(err){

  if(err) throw err;
  console.log("File Created");
});
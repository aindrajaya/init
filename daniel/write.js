const fs = require("fs");
  
const isiTulisan = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
`;
  
fs.writeFile("nulis.html", isiTulisan, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Berhasil Menulis\n");
  }
});
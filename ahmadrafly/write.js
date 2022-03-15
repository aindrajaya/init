const fs = require("fs");

const isiKonten = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>`;

fs.writeFile("write.html", isiKonten, function (error) {
  if (error) throw "Coba lagi masih error";
  console.log("Yeay berhasil");
});

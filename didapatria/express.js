const express = require("express");
const app = express();
const port = 3000;

// const data =  "String dari varible";
const html1 =  
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="background-color: red;">
    <h1>Hallo Kelas FE JS 7 - Halaman 1</h1>
  </div>
</body>
</html>`;

// const html2 =  
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div style="background-color: blue;">
//     <h1>Hallo Kelas FE JS 7 - Halaman 2</h1>
//   </div>
// </body>
// </html>`;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/profile", (req, res) => {
  const nama = "Dida";
  const dynamicName = req.query.dynamicName || "Dida";
  res.render("profile", {nama, dynamicName});
});
app.get("/baru", (req, res) => {
  res.send(html1);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
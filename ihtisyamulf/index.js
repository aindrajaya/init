const express = require("express");
const { render } = require("express/lib/response");
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
let data = [
    [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
],

app.set('view engine', 'ejs'),

//Routes
app.get("/", (req, res) => res.render("index")),
app.get("/profile", (req, res) => {
  const nama = "Rudi";
  const dynamicName = req.query.dynamicName || 'Void'
  res.render('profile', {
    nama,
    dynamicName
  })
}),
app.get("/baru", (req, res) => res.send(html2)),
app.get("/post", (req, res) => res.send(data)),

app.listen(port, () => console.log(`This example App listening at http://localhost:${port}`))]
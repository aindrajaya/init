const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req,res) => res.send("Hello Kelas Malam"));

app.listen(port, () => console.log(`This example App listening at http://localhost:${port}`));

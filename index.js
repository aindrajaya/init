const fs = require("fs");

fs.readFile("coba.html", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
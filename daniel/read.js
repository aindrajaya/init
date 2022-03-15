const fs = require("fs");

fs.readFile("nulis.txt", function (err, data) {
    if(err) throw err;
    console.log(data.toString("utf-8"));
})
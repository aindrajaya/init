const fs = require("fs");

fs.readFile("coba.html", function(err, data) {
    if (err) throw err;
    // console.log(data.toJSON('utf-8'));
    console.log(data.toString("utf-8"));
});
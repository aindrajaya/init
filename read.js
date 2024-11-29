const fs = require("fs");

fs.readFile("coba.html", function (err, data){
    iff(err) throw err;
    console.log(data.toString('utf-8'));
    //console.log(data.toJson());
});
//const fs = require('fs');

//fs.readFile('index.html', function(err, data) {
    //if(err) throw err;
    //console.log(data.toString('utf-8'));
    //console.log(data.toJSON());
//})

// eslint-disable-next-line no-undef
let fs = require("fs");
// eslint-disable-next-line no-undef
let http = require("http");
http.createServer(function (request, response) {
    fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}).listen(8000);
console.log("Server berjalan di http://localhost:8000");
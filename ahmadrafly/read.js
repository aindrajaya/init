const fs = require("fs");

fs.readFile("index.html", function (error, data) {
  if (error) throw "Yahh masih error";
  console.log(data.toString("utf-8"));
});

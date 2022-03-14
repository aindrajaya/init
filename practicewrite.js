const fs = require("fs");

fs.writeFile("test.txt", "This is the text", (err) => {
    if (err) throw err;
    console.log("Write Complete");
});
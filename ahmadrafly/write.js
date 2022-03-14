const fs = require("fs");

const isiKonten = "Learn Node Js";

fs.writeFile("write.txt", isiKonten, function (error) {
  if (error) throw "Coba lagi masih error";
  console.log("Yeay berhasil");
});

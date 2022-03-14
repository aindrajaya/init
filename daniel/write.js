const fs = require('fs');
  
const isiTulisan = "Nama Saya Daniel";
  
fs.writeFile("nulis.txt", isiTulisan, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Berhasil Menulis\n");
  }
});
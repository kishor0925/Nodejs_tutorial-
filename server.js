const fs = require("fs");
const path = require("path");

if (fs.existsSync("./files/Hello.txt")) {
  fs.readFile(path.join(__dirname, "files", "Hello.txt"), "utf-8" , (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('File read: ', data) 
  })

} else {
  console.log("File not exist");
}

fs.writeFile(path.join(__dirname, 'files' , 'Helloo.txt'), 'File Writedd' , (err) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log('File Writted..');
} )

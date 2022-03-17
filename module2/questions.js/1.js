//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs=require("fs");
let path=require("path");
if(!fs.existsSync("new"))
fs.mkdirSync("new");
let filekapath=path.join(__dirname,"new","newfile.txt");
fs.writeFileSync(filekapath,"new file has been made");



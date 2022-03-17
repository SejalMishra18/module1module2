//move a file
let fs=require("fs");
let path=require("path");
let src=path.join(__dirname,"file1.txt");
let dest=path.join(__dirname,"new","file1.txt");
fs.copyFileSync(src,dest);
fs.unlinkSync(src);
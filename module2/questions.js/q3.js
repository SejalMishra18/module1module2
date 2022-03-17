//copy index html file from module 1 to a new folder inside module 2 having name html
let fs=require("fs");
let path=require("path");
let htmlfolder=path.join(__dirname,"..","html");
if(!fs.existsSync(htmlfolder))
fs.mkdirSync(htmlfolder)
let srcpath=path.join(__dirname,"..","..","module1","index.html");
console.log(srcpath);
let destpath=path.join(__dirname,"..","html","index.html");
console.log(destpath);
fs.copyFileSync(srcpath,destpath);

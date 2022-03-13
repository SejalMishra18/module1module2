let fs=require("fs");
let path=require("path");
//create a directory.....
if(!fs.existsSync("owndirectory"))
fs.mkdirSync("owndirectory");
//read a directory...
//let folderpath="__dirname"
//let content=fs.readFileSync(folderpath,'utf-8');
//console.log(content);
//to copyfiletxt and put into module folder
let source=path.join(__dirname,"file.txt") ;
let destination=path.join(__dirname,"module","file.txt");
fs.copyFileSync(source,destination);
//to delete directory
fs.rmdirSync("owndirectory");







let fs = require("fs");
let path = require("path");
let extension= path.extname(__filename);
console.log(extension);
let base=path.basename(__filename);
console.log(base);
//console.log(__dirname);
console.log(__filename);
let dirpath=__dirname;
console.log(dirpath);
let newfilepath=path.join(dirpath,"test.js");
console.log(newfilepath);

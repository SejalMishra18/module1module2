//read content of unorganised folder and make an array which has extension name of each file.
let fs=require("fs");
let path=require("path");
let folderpath=path.join(__dirname,"unorganised");
if(!fs.existsSync(folderpath))
fs.mkdirSync(folderpath);
let content=fs.readdirSync(folderpath);
let extarr=[];
for(let i=0;i<content.length;i++)
{
    let name=path.extname(content[i]);
    extarr.push(name);
}
console.log(extarr);


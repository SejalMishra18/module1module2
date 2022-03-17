//given an array arr=[audio,video,image,software, documents,applications, other]
//make folder for each element in the given array and inside each folder make 4 files of that type.
let fs=require("fs");
let path=require("path");
let folderpath=path.join(__dirname,"organise")
if(!fs.existsSync("organise"))
fs.mkdirSync("organise");
//console.log(folderpath);
let arr=['audio','video','image','software','documents','applications','others']
let arrname=['abc','xyz','bbc','pws']
let extname=['.mp3','.mp4','.jpeg','.exe','.pdf','.apk','.rar']
for(let i=0;i<arr.length;i++)
{
    let newfolder=path.join(folderpath,arr[i]);
    if(!fs.existsSync(newfolder))
    fs.mkdirSync(newfolder);
    for(let j=0;j<arrname.length;j++)
    {   let joinfileext=arrname[j]+extname[i];
        let filekapath=path.join(newfolder,joinfileext);
        fs.writeFileSync(filekapath," ");
    }
    
}

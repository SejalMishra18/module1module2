//let inputarray=process.argv;
//console.log(inputarray);
//let input=process.argv[2];
//console.log(input);
let fs=require("fs");
let path=require("path");
let folderpath=process.argv[2];//take an input 
//console.log(folderpath);
let extensions={
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Images:[".jpg",".jpeg",".gif",".png"],
    Documents:[".pdf",".doc",'.xlsx'],
    Software:[".exe"]
};
let folderexist=fs.existsSync(folderpath);
if(folderexist)
{
    let files=fs.readdirSync(folderpath);
    for(let i=0;i<files.length;i++)
    {
        let ext=path.extname(files[i]);
       // console.log(ext);
       let foldername= givefoldername(ext);
      // console.log("Ext-",ext,"Folder-",foldername);
      let pathoffolder=path.join(folderpath,foldername);
      let exist=fs.existsSync(pathoffolder);
      if(exist)
      {
       movefile(folderpath,pathoffolder,files[i]);
      }
      else{
          fs.mkdirSync(pathoffolder);
          movefile(folderpath,pathoffolder,files[i]);
      }


       }
}
else{
    console.log("Enter a valid path!!!");
}
function givefoldername(ext)
{
    for(let key in extensions)
    {
        let extarr=extensions[key];
        for(let i=0;i<extarr.length;i++)
        {
            if(extarr[i]==ext)
            {
                return key;
            }
        }
    }
    return 'Others';
}
function movefile(folderpath,pathoffolder,filename)
{
    let srcpath=path.join(folderpath,filename);
    let destpath=path.join(pathoffolder,filename);
    fs.copyFileSync(srcpath,destpath);
    fs.unlinkSync(srcpath);
}

let fs=require("fs");
let p=require("path");
let filepath=p.join(__dirname,"file.txt");
console.log(filepath);
fs.writeFileSync(filepath,"Hello ,i am a coder!!!!");
fs.writeFileSync(filepath,"I am sejal....");
console.log("Before update..");
let content=fs.readFileSync(filepath,'utf-8');
console.log(content);
fs.appendFileSync(filepath,"\nNewly added content");
console.log("After update");
console.log(fs.readFileSync(filepath,'utf-8'));
fs.unlinkSync(filepath);


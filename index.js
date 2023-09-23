const fs=require("fs");

// how to read a file
const data=fs.readFile("TestFile.txt",(err,data)=>{
    if(err){
        console.log('Error', err);
    }
    console.log("===",data.toString());
});


//how to write a file

fs.writeFile("TestWrite.txt","Hello we write in Node js...",(err)=>{
if(err){
    console.log("---",err);
}
else{
    console.log("done writting");
}
})


//how to append data in a file
fs.appendFile("TestWrite.txt","Hurray",(err)=>{
if(err){
    console.log("---",err);
}
else{
    console.log("done Writing");
}
})

//how to delete a file 
fs.unlink("TestWrite.txt",(err)=>{
if(err){
    console.log("---",err);
}
else{
    console.log("done Deleting");
}
})



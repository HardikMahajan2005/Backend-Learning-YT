import * as fs from "fs";

// in this we will not use the try catch
// because we are not handling the error
// we are directly callbacking the function

fs.mkdir("c:\\Users\\hardi\\OneDrive\\Desktop\\hello",(error)=>{
    if(error) throw error;
    console.log("Directory Created...");
})

fs.mkdir("c:\\Users\\hardi\\OneDrive\\Desktop\\hello",function(error){
    if(error) throw error;
    console.log("Directory Created...");
});
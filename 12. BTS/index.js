// Blocking Code
// console.log("start");
// alert("Block");
// console.log("End");

// Non-Blocking Code
// console.log('start')
// setTimeout(()=>{
//     alert("Non-Blocking");
// },1000);
// console.log("End");

import fs from 'fs';
console.log("start");

let data=fs.readFile("test.txt", 'utf-8', (err,res)=>{
   if(err){
    console.log(err);
   }else{
    console.log(res.toString());
   }
});

console.log("End");
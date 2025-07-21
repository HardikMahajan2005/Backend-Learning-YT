const http=require("http");

// Create our server
const server=http.createServer((req,res)=>{
    // console.log(req);
    res.write("<h1>Hello From Node.js Server</h1>");
    res.end();
    // res.end() this is used to complete the response
});
// listen on port 8000 
server.listen(8000,()=>console.log("server Up!"));
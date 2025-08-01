// console.log("jashqsksnkkjebfrgbvbwekjdgbhktbgbfr")
import http from 'http';

const server=http.createServer((req,res)=>{
    res.writeHead(202,"Good",{"Content-Type": "text/html"});
    res.write("<h1>Hello From Node.js Server</h1>");
});

server.listen(8000,()=>console.log("server Up!"));
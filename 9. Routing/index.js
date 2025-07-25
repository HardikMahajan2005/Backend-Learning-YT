// we don't majorly use this routing in the http because we do it in express 
// as in interview then can might be ask to do the routing in the vanilla node.js
import http from "http";

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        // res.end("<h1>Home</h1>");
        res.writeHead(200,"OK",{ "Content-Type": "text/html" });
        res.end("<a href='/contact'>Contact Page</a>");
    }
    else if(req.url==="/about"){
        res.writeHead(200,"OK",{ "Content-Type": "text/html" });
        res.end("<h2>about section</h2>");
    }
    else if(req.url==="/contact"){
        res.writeHead(200,"OK",{ "Content-Type": "text/html" });
        res.end("<h3>Contact</h3>");
    }
    else{
        res.writeHead(404,"BAD",{ "Content-Type": "text/html" });
        res.end("<h1>404 Patch not Found</h1>");
    }
});

// /homepage

server.listen(8000,()=>console.log("Server Up!"));
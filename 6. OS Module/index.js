// The os module in Node.js is a built-in module that 
// provides information about the operating system on which 
// the Node.js application is running.
import os from "os";
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.totalmem());
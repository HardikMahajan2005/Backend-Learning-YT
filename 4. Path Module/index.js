// we are changing the type to module in js because here we are using import export method if we use the old method require/module.exports then we have no need to change the type to module
import path from "path";

// this will print the path related to
console.log(path.basename());

// this will print the directory name
console.log(path.dirname());

// this will print the extension name (for ex:in this it will return the js)
console.log(path.extname()); 

// this will join the path which we will provide him for ex:- see below line
console.log(path.join("c:","huxn-webdev","course","redux-toolkit"));

// go up a level means deleting the last path
console.log(path.join("c:","huxn-webdev","course","redux-toolkit",".."));
console.log(path.join("c:","huxn-webdev","course","redux-toolkit","..",".."));

// it will normalize the path if it is very ugly path
console.log(path.normalize("c:\\courses\\redux\\store\\features\\"));

console.log(path.parse(""));
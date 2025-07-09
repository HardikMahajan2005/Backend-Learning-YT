// module is the way to transfer our code from the one file to the another file so that we don't need to write our code again and again

// basically we are importing the things which we are required
const greet=require("./greet");
const {person1,person2,person3}=require("./peoples");
// console.log(person1);
// console.log(person2);
// console.log(person3);
// greet("Hardik");
greet(person1);
greet(person2);
greet(person3);
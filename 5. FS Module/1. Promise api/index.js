import * as fs from "fs/promises";

// creating the folder or Directory using the node js
// try {
//     // this will create the folder name hello on the desktop
//     // the below line will create the folder if the path is clear and their is no breakage
//     await fs.mkdir("C:\\Users\\hardi\\OneDrive\\Desktop\\hello");
//     // if their is breakage or for the safety you can use the below line by setting the recursive:true it will help us out 
//     await fs.mkdir("C:\\Users\\hardi\\OneDrive\\Desktop\\hello",{recursive:true});
//     console.log("Folder Created ...");
// } catch (error) {
//     console.log(error);
// }

// // method to read the content of the folder
// try {
//     const files=await fs.readdir("c:\\Users\\hardi\\OneDrive\\Desktop\\hello");
//     for (const file of files) {
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }

// // method to delete the folder or directory
// try {
//     await fs.rmdir("c:\\Users\\hardi\\OneDrive\\Desktop\\hello")
// } catch (error) {
//     console.log(error);
// }

// // method to Create and Write Files
// try {
//     await fs.writeFile("README2.md","Hello Nodejs")
// } catch (error) {
//     console.log(error);
// }

// // method to Read the file
// try {
//     const data=await fs.readFile("README2.md","utf-8");
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// // method to append the data
// try {
//     const data=fs.appendFile("README2.md", "Nodejs is the best");
// } catch (error) {
//     console.log(error);
// }

// Copy the file
// try {
//     await fs.copyFile("README2.md","info.txt");
// } catch (error) {
//     console.log(error);
// }

// get the file information
try {
    const info=await fs.stat("info.txt");
    // console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
    // info is the file not the directory so that'sw why they are showing the error in the directory
} catch (error) {
    console.log(error);
}
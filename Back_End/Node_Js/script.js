//----------------------------------What is Node.js-------------------------------------------------------------
// Node.js -> Javascript Runtime Enviroment.(Node.js browser ke bahar run karne ka invironment deta hai.-----
// It is used for server side programming.-----
// *Node.js is not a language, library or framwork.------

//----------------------------------Node REPL--------------------------------------------------
//help gives us commands -----
//Node Read Evaluate Print Loop------

//----------------------------------Node Files--------------------------------------------------
//create js file and run command - node script.js -------
// let n= 5;
// for(let i=1;i<=n;i++){
//     console.log(`Hello Akash ${i}`);
// };
// console.log("Bye!");

//----------------------------------Process in Node--------------------------------------------------
//process: This object provides information about, and control over, the current Node.js process.-----
//process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.------
// console.log(process.argv);

// let args =process.argv;
// for(let i=2; i<args.length;i++){
//     console.log(`Hello to ${args[i]}`);
// }

//----------------------------------Export in Files--------------------------------------------------
//requiring files---
//require() : a built-n function to include external modules that exist in separate files----
//module.export = fnx ya some : a special object----
// const math = require("./math");         //math.js file module.exports ya exports (Export) kar rha hai jise script.js file require kiya
// // console.log(math);                   //No exports but require file then print {} (emmpty object)
// console.log(math.sum(3,6));
// console.log(math.mul(3,5));
// console.log(math.PI)
// console.log(math.g);

//----------------------------------Export in Directories--------------------------------------------------
//require() : a built-n function to include external modules that exist in separate files----
//module.export = fnx ya some : a special object----
// const info = require("./Fruits");   //Fruits Directories me ye index.js me jo export hoga wahi require karega other wise nhi 
// console.log(info);
// console.log(info[0]);
// console.log(info[0].name);

//----------------------------------What is npm--------------------------------------------------
//NPM -> Node Package Manager   (library of packages)------
//npm is the standard package manager for Node.js.  (Ex-express.js, react.js, feglet.js)-----
//1) library of packages -> express js , react js
//2) command line tool

//----------------------------------Installing npm Packages--------------------------------------------------
//node_mudules : The node_mudules folder contains every installed dependency for your project---
// package-Lock.json : it records the exact version of every installed dependency, including its sub-dependencies and their version.------
//install figlet -> package install a directory
//1) node_modules -> dependency store
//2) package.json -> information store

//----------------------------------npm Package.json--------------------------------------------------
//The package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies----
//agar node_modules folder delete ho jaye to -> terminal me uss folder me jake npm instal likho download ho jayega-----
//Figlet_Dir index.js file run----

//Create our package----------------------------
//Create folder -> cd (folder name) -> npm init (initialise folder to npm) ------------------
//install other package -> add package.json file (figlet),(give-me-a-joke)package install
//My_Project index.js file run----

//----------------------------------Local v/s Global Installation--------------------------------------------------
//install figlet globally - npm install -g figlet -> npm link figlet -> then run code script.js 
// const figlet = require("figlet");    
// figlet("Akash deep", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//----------------------------------import modules--------------------------------------------------
//require v/s import-----
//import{sum} from "./math.js"
//We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
//Loading in synchronous for 'require' but can be asynchronnous for 'import'.
//require all package ya import all package in a project-----
//math.js file export  (Export) kar rha hai jise script.js file import kiya

//create package.json -> type command ( npm init ) and add inside "type": "module"
import {sum,PI} from "./math.js";   //full file name ex- math.js
console.log(sum(4,5));              

//install random-words package----
import {generate} from "random-words";  //generate random words
console.log(generate());


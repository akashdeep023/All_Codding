// -------------------------------------------Call Stack---------------------------------------------
// function hello(){
//     console.log("inside hello fnx");
//     console.log("Hello World");
// }
// // hello();        //ye hello() - Call hai

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }
// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");


//Stack - LIFO (Last in , First out) jo last me stack me (in) jayega vo first me bahar (out) hoga
//Call Stack ak Data Structure hai jo track karta hai ki abhi koun se function ka call chal rhi hai call add hota hai or remove hota chala jata hai
//uper ke Call Stack me pahle demo fnx aaya fir hello fnx aaya fir hello fnx remove huaa fir last me demo fnx remove huaa

// -----------------------------------Visualizing the Call Stack ---------------------------------------------
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();       //(3)  +  (4)
// }
// function three(){               //(1)
//     let ans = two() + one();    //(2)  +  (5)print
//     console.log(ans);
// }
// three();        //Stack frame / function call

//Stack - fnx call -> (1)three()add -> (2)two()add -> (3)one()add -> one()remove -> (4)one()add -> one()remove -> two()remove -> (5)one()add -> one()remove -> ans print -> three()remove

//-----------------------------------------------Breakpoints------------------------------------------------
//hot to add breakpoints - go website -> inpect -> sources -> js file -> add breakpoint (click no)(multi add breakpoint)
//refresh page -> click step into next fnx call -> again and agian  || see the call stack and scope

//-------------------------------------------JS is Single Threaded-------------------------------------------------
//JavaScript single thread language hai | ak time pe ak hi kaam karta hai fir uske baad next kaam karega
// let a = 25; 
// console.log(a);
// let b = 10; 
// console.log(b);
// console.log(a + b);

//JavaScript ka natur -> Synchronous Nature  hota hai

setTimeout(() => {                      //setTimeout ka kaam js nhi karta hai browser karta hai jo (c++, java, etc) se banta hai or ye language multi thread language hai
    console.log("Apna college");
}, 2000);                               
setTimeout(() => {                      //run brower not js
    console.log("hello world");
}, 2000);                               
console.log("hello...");

//setTimeout() jaise fnx aane pe JavaScript Asynchronous Nature ke ho jate hai

//js setTime ko ignore karta hai age ka function run karta hai 
//browser setTime fnx ko execute karta hai or rok kar rakhta hai jaise hi time complete hota hai browser js ko callStack me deta hai fir js execute karta hai
//ak sath kabhi bhi js execute nhi karta hai








//Practice Qs-1
//Write an arrow function that returns the square of a number 'n'.
let num = 4;
// const squareOfNum = (n) =>{
//     console.log(n*n);
// }
// squareOfNum(num);
// squareOfNum(25);
const squareOfNum = (n) =>(n*n);
console.log(squareOfNum(num));
console.log(squareOfNum(25));

//Practice Qs-1
//Write a function that prints "Hello World" 5 times at intervals of 2s each.
let id=setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interver ran");
}, 10000);
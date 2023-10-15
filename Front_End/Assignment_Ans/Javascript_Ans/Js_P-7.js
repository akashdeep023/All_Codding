//Qs-1 Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let array = [23,43,55,33,62,48,20,38];
const arrayAverage = (array) => {
    let sum=0;
    for(let i=0; i<array.length; i++){      //for(let number of array)
        sum+=array[i];                      //sum+= number;
    }
    return sum/array.length;
}
console.log(arrayAverage(array));

//Qs-2 write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num = 11;
// const isEven= (n) => {
//     if(n%2==0){
//         return "Even";
//     }else{
//         return "Not Even";
//     }
// }
const isEven = (num) => num % 2 == 0;

console.log(isEven(num));

//Qs-3 What is the output of the following code 
const object = {
    message: 'Hello, World!',
    logMessage() {
    console.log(this.message);      //window scope
    }
};
setTimeout(object.logMessage, 1000);
//output - After a delay of 1 second, undefined is logged to the console


//Qs-4 What is the output of the following code  
let length=4;
function callback(){
    console.log(this.length)
}
const object2 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object2.method(callback,1,2);   //output - 0 
// callback();                  //output - 0


// What is the output of the following code  --------
var num1 = 4;       //globle level
let num2 = 5;       //block level
function call() {
    console.log(this);
    console.log(this.length);       //window scope hai
    console.log(this.num1);         //num1 - globle level hai
    console.log(this.num2);         //num2 - block level hai
}
call();             //ans(line-41)=window
                    //ans(line-42)=0  || kyo ki window ka length 0 hai (window ko expand kro)
                    //ans(line-43)=4  || kyo ki num1 globle level = window scope hai 
                    //ans(line-44)=undefined || kyo ki window object me num2 defined nhi hai


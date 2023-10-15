// --------------------------Function in JS-------------------------

// ----Function Definition (telling Js)----
// function funcName(){
//     // do something
// }
//----Function Calling (using the function)-----
// funcName();

function hello(){
    console.log("Hello World");
}
hello();

function printName(){
    console.log("Apna college");
    console.log("Akash deep");
}
printName();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=16;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}
isAdult();

//-----------------------Function with Arguments---------------------------
//Values we pass to the function
// function funcName(arg1,arg2,..){
//     //do something
// }

function printName1(name){
    console.log(name);
}
printName1("Akash");

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
    // console.log(name+"'s age is "+ age+".");
}
printInfo("Akash", 22);
printInfo("Ashu", 21);
printInfo("Jack");
printInfo(21);

function sumNo(a,b){
    console.log(a+b);
}
sumNo(2,5);
sumNo(23,54);
sumNo(324,9347);

//-------------------------Return Keyword--------------------------
//return keyword is used to return some value from the function.
//return karne ke baad uske niche ka code run nhi hota hai
// function funcName(arg1, arg2,...){
//     //do something
//     return val;
// }

function sum1(a,b){
    return a+b;
}
// let s=sum1(5,9);
// console.log(s);
console.log(sum1(5,9));
console.log(sum1(sum1(4,5),19));

function isAdult1(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
    console.log("Bye bye");//this code is not run 
}
console.log(isAdult1(16));
console.log(isAdult1(22));

//------------------------------Scope----------------------------
//Scope determines the accessibility of variables, objects, and function from different parts of the code.
//Function || Block || Lexical

//Function Scope----
//Variables defined inside a function are not accessible (visible) from outside the function.
let sum = 54;           //Globle Scope
function calSum(a,b){
    let sum = a+b;      //Function Scope
    console.log(sum);
}
calSum(2,3);
console.log(sum);

//Block Scope-----
//Variables declared inside a {} block cannot be accessed from outside the block.
{
    let a =25;      //block scope
    const b = 30;   //block scope
    var c = 22;     //globle scope - var variable hone se
}
// console.log(a);      //not define
// console.log(b);      //not define
console.log(c);
let age = 22;       //Globle Scope
if(age>=18){
    let str = "adult";  //block scope
    console.log(str);
}
// console.log(str);      //not define

//Lexical Scope-------(nexted fuction me used)
//A variable defined outside a function can be accessible inside another function defined after the variable declaration.
//The opposite in NOT true.
function outerFunc(){
    let x=5;                    //function scope
    let y=6;                    //function scope
    function innerFunc(){       //function scope
        // let a=10;
        console.log(x);         //function scope | lexical scope
        console.log(y);         //function scope | lexical scope
    }
    // console.log(a);             //block scope || not define
    innerFunc();                //function scope
}
outerFunc();
// innerFunc();         //not define

//------------------------Function Expressions----------------------------
// const variable = function(arg1, arg2, ..){
//     //do or return something
// }
let name = "akash";
    //Second form hai function likhne ka || ise name less fuction kahte hai
let sumTwoNo = function(a,b){
    return a+b;
}
console.log(sumTwoNo);
console.log(sumTwoNo(2,5));

let helloPrint = function(){
    console.log("hello");
}
console.log(helloPrint);
helloPrint();
//jo kaam variabl ke sath kar sakte hai vo function expression ke sath kar sakte hai
helloPrint = function(){
    console.log("namaste");
}
console.log(helloPrint);
helloPrint();

//---------------------------Higher Order Functions-----------------------------
//A function that does one or both:
    //takes one or multiple functions as arguments
    //returns a function
function multipleGreet(func,count){     //higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,21);
multipleGreet(function(){console.log("namaste");},100);

//------------------Higher Order Functions Returns---------------------
//Returns a function

function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2== 0);
        }
    }else{
        console.log("wrong request");
    }
}
let request = "odd"; //odd || even
// let funcCreate = oddOrEvenFactory(request);      //create a odd check function
// funcCreate(3);  //odd hai       true
// funcCreate(10); //odd nhi hai   false
request = "even";
let funcCreate = oddOrEvenFactory(request);         //create a even check function
funcCreate(3);  //odd hai       false
funcCreate(10); //odd nhi hai   true

//----------------------------------Methods-------------------------------
//Action that can be performed on an object.
const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(2,5));
console.log(calculator.sub(12,5));
console.log(calculator.mul(2,5));
console.log("------------------------------");

//--------------------------------Methods (Shorthand)--------------------------
const calculator1 = {
    num: 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(calculator1);
console.log(calculator1.num);
console.log(calculator1.add);
console.log(calculator1.add(2,5));
console.log(calculator1.sub(12,5));
console.log(calculator1.mul(2,5));

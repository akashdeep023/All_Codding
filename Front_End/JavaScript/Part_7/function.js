//-------------------------This-------------------------
//"This" keyword refers to an object that is executing the current piece of code.
const student={
    name: "akash",
    age: 22,
    eng: 92,
    phy: 95,
    math: 98,
    getAvg(){
        // console.log(this);      //this is equal to object  || kyo ki ye object ke andar hai
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.name);
student.getAvg();

function getAvg(){      //jiska object define no ho uska ka object window hota hai
    console.log(this);
}
getAvg();       //window.getAvg();  
// alert("hi");    //window.alert("hi");

//----------------------------try & catch------------------------------------
//try - The try statement allows you to define a book of code to be tested for errors while it is being executed.
//catch - The catch statement allows you to define a bolck of code to be executed, if an error occurs in the try block.
//Ex--
console.log("hello");
console.log("hello");
// let a=5;
try{
    console.log(a);
}catch(err){
    console.log("caught an error.. a is not defined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("---------------------");

//---------------------------Miscellaneous Topics--------------------------------
//----------------Arrow Functions-------------------
// const func = (arg1, arg2, ..) => {
//     function definition
// }
const sum =(a,b) => {
    console.log(a+b);
}
console.log(sum);
sum(4,3);
sum(23,31);

const cube=(n) => {
    return n*n*n;
}
console.log(cube(3));
console.log(cube(9));

const pow=(a,b) => {
    return a**b;
}
console.log(pow(2,3));

//single argument me () "parenthecis" hata sakte hai
//but without argument me () hona jaruri hai

const hello=() => {
    console.log("hello world");
}
hello();

//Arrow Function Implicit return (autometic return value)-------
// const func = (arg1, arg2,..)=>(value)        //no print | no calculate | only return
// const mul= (a,b) => (a*b);
const mul= (a,b) => a*b;
console.log(mul(3,8));

const divd=(a,b) => a/b;
console.log(divd(12,3));

//--------------------Set TimeOut Function--------------------
//setTimeout(function,timeout)
console.log("Hi there");    //rendom text print

setTimeout(() => {
    console.log("Apna College");            // set timeout se kuch time ke baad print hoga
}, 2000);                           //2000ms = 2sec

console.log("Welcom to");    //rendom text print
console.log("----------------------------------");

//--------------------Set Interval Function------------------------
//setInterval(function,timeout)
console.log("Hi there");    //rendom text print
let id=setInterval(() => {                  // interval 2sec pe print hote rhega
    console.log("Hello World 1");
}, 2000);   
console.log(id);                            // har ak ka apna id hota hai

let id2=setInterval(() => {
    console.log("Hello World 2");
}, 2000);
console.log(id2);

clearInterval(id);
clearInterval(id2);
console.log("----------------------------------");

//------------------------this with Arrow Functions---------------------
//function - scope -> this -> colling object
//arrow function - scope -> lexical scope -> parent scope

const std1 ={                   //this ka value
    name: "aman",
    marks: 92,
    pro: this,                  //globle scope  - this ka value
}
const a = 5;                    //globle scope  - this ka value


const std2 ={
    name: "aman",
    marks: 92,
    pro: this,                  //globle scope  - this ka value
    getName: function(){        //normal function me colling scope ko dekhta h
        console.log(this);      //colling scope (std2)  - this ka value
        return this.name;
    },
    getMarks: () => {           //arrow function parent's scope ko dekhta h
        console.log(this);      //parent's scope (std2 ka parent-> window)  - this ka value
        return this.marks;
    },
    getInfo1: function(){       
        setTimeout(() => {
            console.log(this);  //std2 
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this);  //window
        }, 2000);
    }
}
console.log(std2.getName());
console.log(std2.getMarks());

std2.getInfo1();
std2.getInfo2();

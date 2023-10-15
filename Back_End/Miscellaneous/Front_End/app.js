//in Miscellaneous\Front_End\index.html----
//------------------------------------------Revisiting JS (OOPS)---------------------------------------
//create object stu1 and repete stu2 and other (This creation method is unofficient -> use OOPS (Object Oriented Programming Language) to crate object)
//NOT GOOT METHOD---------
const stu1 = {     
    name: "adam",
    age: 23,
    marks: 97,
    getMarks: function(){
        return this.marks;
    },
};
const stu2 = {
    name: "eve",
    age: 25,
    marks: 95,
    getMarks: function(){
        return this.marks;
    },
};
const stu3 = {
    name: "bob",
    age: 21,
    marks: 91,
    getMarks: function(){
        return this.marks;
    },
};
//create object to OOPS----
//basically create a blueprint a subject---

//------------------------------------------Object Prototypes (OOPS)---------------------------------------
//Prototypes are the mechanism by which javaScript objects inherit features from one another.
//It is like a "single template" object that all objects inherit methods and properties from without having their own copy.
//Every object in JavaScript has a built-in property, which is called its prototype.
//1) arr.__proto__  (reference)
//2) Array.prototpye  (actual object)
//3) String .prototype
//create array object ---   NOT GOOT METHOD---------
let arr1 = [1,2,3];
arr1.sayHello = () =>{
    console.log("hello arr");
}
let arr2 = [3,4,5];
arr2.sayHello = () =>{
    console.log("hello arr1");
}

//print arr in console then a print proto Prototype--
//sabhi arr me  Prototype hote--
//how to print prototype
//arr.__proto__  (reference)-----------
console.log(arr1.__proto__);
//a arr prototype have every arr fnx  
//change push fnx to prototype - (arr.__proto__)
arr1.__proto__.push = (n)=>{
    console.log(`pussing number : ${n}`)
} 
arr1.push(5);    //not include 5 (kyo ki push fnx me print kar rhe hai add nhi)
console.log(arr1);

//Array.prototpye  (actual object)--------------
console.log(Array.prototype);

//String .prototype (actual object)--------------
console.log(String.prototype);

//array ka prototype same nhi hote hai
console.log(arr1.sayHello===arr2.sayHello); //false arr1 or arr2 ka alag alag copy banta hai jo good nhi hai

//string ka prototype same hote hai
console.log("abc".toUpperCase==="xyz".toUpperCase); //true

//------------------------------------------Factory Functions---------------------------------------
//Factory fnx - Create object ------------  NOT GOOT METHOD---------
function PersonMaker(name,age){
    const person ={
        name: name,
        age: age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("adam",25);   
console.log(p1);

let p2 = PersonMaker("jack",22);   
console.log(p2);

console.log(p1.talk===p2.talk);     //false p1 or p2 ka alag alag copy banta hai jo good nhi hai

//------------------------------------------New Operator---------------------------------------
//The new operator lets developers create an instance(p11 & p12 object) of a user-defined object type or of one of the built-in object types theat has a constructor function.
//Constructors - Doesn't return anythind & start with capital latter -----------------
//Constructors - Create object------------- NOT GOOT METHOD---------
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){             //this fnx in prototype
    console.log(`Hi, my name is ${this.name}`);
}
let p11 = new Person("bob",23);     //new create object with constructors
console.log(p11);

let p12 = new Person("eve",21);     //new create object with constructors
console.log(p12);

console.log(p11.talk===p12.talk);       //true  p11 or p12 ka ak hi copy banta hai jo good hai

//------------------------------------------Classes in JS---------------------------------------
//Classes are a template for creating objects
//The constructor method is a special method of a class for creating a nd initializing an object instance(p11 & p12 object) of that class.
//NOT GOOT METHOD---------
class Persons{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);     //this fnx in prototype automatically
    }
}
let p111 = new Persons("bob",23);     //new create object with class
console.log(p111);

let p112 = new Persons("bob",23);     //new create object with class
console.log(p112);

console.log(p111.talk===p112.talk);       //true  p11 or p12 ka ak hi copy banta hai jo good hai

//------------------------------------------Inheritance---------------------------------------
//Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.
//in Miscellaneous\Front_End\appObj.js----


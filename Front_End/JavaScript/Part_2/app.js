// javascript ko inspect ke console me dekhte hai

// console.log("hello world");
console.log("akash deep");
console.log(1+2);
// let a= 10;
// let b=20;
// console.log("sum of : ", a+b);
// this is a comment

// Ex 1
let penPrice = 10;
let pencilPrice = 5;
    // 1st method
let output1 = "The total Price is : " + (penPrice + pencilPrice) + " Rupees.";
console.log(output1);
console.log("Tht tatal price is :",penPrice+pencilPrice,"Rupees.");     //console me do variable ke bitch ,(comma) lagate hai space automaticaly aa jata hai
    // 2nd method
    //  ` ` - back end bolte hai
let output2 = `The total price is : ${penPrice+pencilPrice} Rupees.`;   // used template literals ${ }
console.log(output2);
console.log(`The total price is : ${penPrice+pencilPrice} Rupees.`);

    // Operators ------------------------------------------
//Arithmetic Operators      + , - , * , / , % , ** 
let a =10;
let b =5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary Operators           ++ , --
console.log(a++); //print 10 than change a=11
console.log(++a); //print 12 change before a=12

//Assignment Operators      = , += , -= , *= , /=
a=b;
console.log(a); //5
a+=5;   //a=a+5     =5+5=10
console.log(a); //10
a*=2;   //a=a*2     =10*2=20
console.log(a); //20


//Comparison Operators      > , >= , < , <= , == , !=
a=10;
b=5;
console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

let num=10;
let str='10';
console.log(num==str);      // == ye compares value, not type   
console.log(num===str);     // === ye compare vlaue & type

console.log('123'==123);
console.log(123=='123');
console.log(0=='');
console.log(0==false);
console.log(null==undefined);

console.log('123'===123);
console.log(123==='123');
console.log(0==='');
console.log(0===false);
console.log(null===undefined);

    //Comparison for non-numbers -------------------------------
// 'a' -> 61, 'b' -> 62, 'c' -> 63 ------
// 'A' -> 41, 'B' -> 42, 'C' -> 43 ------
console.log('a'<'b');   //true
console.log('A'<'B');   //true
console.log('a'<'A');   //false
console.log('$'<'&');   //true

    //Conditional statements ---------------------------------------
    //if-else
    //nested if-else
    //switch
//if statement -----------
console.log("before my if statement");
// let age=23;
// let age=14;
let age=20;
if(age>=18){
    console.log("you can vote");
    // console.log("you can drive");
    // let x=5;
    // console.log(5*x);
}
if(age<18){
    console.log("you can't vote");
}
console.log("after my if statement");
if(age==20){
    console.log("your age 20 years")
}

let firstName="akash deep";
if(firstName=="akash deep"){
    console.log(`Welcon ${firstName}`);
}

// else if statement ----------
let ages=14;
if(ages>=18){
    console.log("you can vote");
}else if(ages<18){
    console.log("you can't vote");
}

let marks=35;
if(marks>=80){
    console.log("A+");
}else if(marks>=60){
    console.log("A");
}else if(marks>=33){
    console.log("B");
}else if(marks<33){
    console.log("C");
}

// else statement -------------
let agee=15;
if(agee>=18){
    console.log("you can drive");
}else{
    console.log("you can't drive");
}

let color="yellow";
if(color==="red"){
    console.log("stop");
}else if(color==="yellow"){
    console.log("slow down");
}else if(color==="green"){
    console.log("go");
}else{
    console.log("traffic light is broken");
}

//Nested if-else
//nesting is writing if-else inside if-else statements. if can have many levels.
let mark=25;
if(mark>=33){
    console.log("Pass");
    if(mark>=80){
        console.log("Grade : O");
    }else if(mark>=60){
        console.log("Grade : A");
    }else{
        console.log("Grade : B");
    }
}else{
    console.log("Fail");
    console.log("Better luck next time");
}

    //Logical Operators
    //And - &&
    //OR - ||
    //Not - !

//And - &&
let rank=85;
if(rank>=33 && rank>=80){   //true && true = true 
    console.log("pass");
    console.log("O");
}
//Or - ||
let ranks=75;
if(ranks>=33 || ranks>=80){   //false || false = false
    console.log("pass");
    console.log("A");
}
//Not - !
let rs=80;
if(!(rs<50)){
    console.log("Print");
}

    //truthy & falsy
//falsy(false) - false, 0, -0, 0n (bigint value), "" (empty string), null, undefined,NaN
//truthy(true) - Everything else


// let string = "";
let string = " ";
if(string){
    console.log("string is not empty");
}else{
    console.log("string is empty");
}
// let numb =0;
let numb =10;
if(numb){
    console.log("num is not equal to 0");
}else{
    console.log("num is equal to 0");
}

//Switch statement
//used when we have some fixed values that we need to compare to.
let colors = "green";
switch(colors){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go");
        break;
    default :
        console.log("broken light");    
}
console.log("after switch statements");

    //Alert & Prompt
//Alert displays an alert message on the page.---------
//alert("something is wrong!");--------
// alert("This is a simple alert!");
console.log("This is a simple log");
console.error("This is an error msg");
console.warn("This is an warning msg");

//Prompt displays a dialog box that asks user for some input.-----------
//prompt("please enter your roll no.");---------
// let firstN = prompt("Enter your name : ");
// console.log(firstN);

// ----------------------
let fName= prompt("Enter first name : ");
let lName= prompt("Enter last name : ");
let msg="Welcome "+fName+" "+lName+" !";
console.log(msg);
let msError="This name is error "+fName+" "+lName+".";
console.error(msError);
alert(msError);













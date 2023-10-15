//Practice Qs 1
function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}
printPoem();

//Practice Qs 2
// Method-1
    // let num=Math.ceil(Math.random()*6);
//Method-2
    // let num=Math.floor(Math.random()*6)+1;
function rollDice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
rollDice();
rollDice();
rollDice();
rollDice();

console.log("------------------------------");
//Practice Qs-3
//Create a function that given us the average of 3 number.
function average(a,b,c){
    console.log((a+b+c)/3);
}
average(3,3,3);
average(23,53,75);

//Practice Qs-4
//Create a function that prints the multiplication table of a number.
function printTable(n){
    console.log("Print the Table of "+ n)
    for(let i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
printTable(2);
printTable(9);
printTable(17);

//Practice Qs-5
// Create a function that returns the sum of number from 1 to n.
function sumOfNum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNum(10));

//Practice Qs-6
//Create a function that returns the concatenation of all strings in an array.
let stringArray=["Akash","is","a","good","boy"];
function concatenateString(array){
    let concaStr="";
    for(let i=0; i<array.length; i++){
        concaStr += array[i]+" ";
    }
    return concaStr;
}
console.log(concatenateString(stringArray));

//Practice Qs-7
//What will be the output?
let greet = "hello";                    //Global scope
function changeGreet(){
    let greet = "namaste";              //Function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);             //Lexical scope
    }
}

console.log(greet);     //hello         //Global scope
changeGreet();          //namaste || innerGreet run nhi karega kyo ki fuction banaye hai run nhi kiye hai






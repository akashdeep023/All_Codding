//-------------------------Array Methods-------------------------------
//forEach | map | filter | some | every | reduce
//forEach------------------------------------------------
//arr.forEach(some function definition or name);   //elemnt ko return karta hai
let arr=[1,2,3,4,5];
// M-1
console.log("------Method-1---------");
let print=function(el){
    console.log(el);
};
// print(arr);
// for (el of arr) {
//     console.log(el);
// }
arr.forEach(print);     //for of loop ki tarah

// M-2
console.log("------Method-2---------");
arr.forEach(function(el){
    console.log(el);
});

//M-3
console.log("------Method-3---------");
arr.forEach((el)=>{
    console.log(el);
});
console.log("-----------------------------");

let arra=[{
        name: "aman",
        marks: 95,
    },
    {
        name: "akash",
        marks: 94.4,
    },
    {
        name: "rajat",
        marks: 92,
    }
];
arra.forEach((student)=>{
    console.log(student);
});
arra.forEach((student)=>{
    console.log(student.marks);
});
console.log("-----------------------------");

//map-------------------------------------------------------
//let newArr= arr.map(some function definition or name);    //element ko other array me store karta hai same length
let num=[1,2,3,4];
let double= num.map((el)=>{
    return el*2;
})
console.log(num);
console.log(double);
console.log("-----------------------------");

//uper me object create hai arra uska used karte hai
let gpa=arra.map((el)=>{
    return el.marks/10;
})
console.log(gpa);
console.log("-----------------------------");

//filter----------------------------------------------------
// let newArr= arr.filter(some function definition or name);
let nums=[1,2,3,4,7,8,2,9,10,12,11];
let ans= nums.filter((el)=>{    
    return el%2 == 0;       //even ->true, odd -> false
    // return el%2 != 0;       //even ->false, odd -> true
    // return el < 5;       //el lessthen 5 then print
})
console.log(ans);
console.log("-----------------------------");

//every-----------------------------------------------------Opposite - some
//Returns true if every elements of array gives true for some function. Else returns false.
//arr.every(some function definition or name);
let arr1=[1,2,3,4,];
let everyAns = arr1.every((el)=>{   //And operator (&&) ki tarah kaam karta hai
    return el%2==0;     //even
});
console.log(everyAns);
console.log("-----------------------------");

//some------------------------------------------------------Opposite - every
// arr.some(some function definition or name);
let arr2=[1,2,3,4,];
let someAns = arr1.some((el)=>{   //Or operator (||) ki tarah kaam karta hai
    return el%2==0;     //even
});
console.log(someAns);
console.log("-----------------------------");

//reduce---------------------------------------------------
// Reduces the array to a single value
// arr.reduce(reducer function with 2 variables for (accumulator, element));        //variables name any things
let numbs=[1,2,3,4];                                // res=0;el=1   return=1;el=2  return=3;el=3   return=6;el=4
let finalVal = numbs.reduce((res,el)=>res+el);      // (0,1)        (1,2)          (3,3)           (6,4)
console.log(finalVal);                              // 0+1=1;       1+2=3;         3+3=6;          6+4=10;  final ans=10;
console.log("-----------------------------");

//--------------Maximum in array----------------------------------
let ar=[10,9,4,6,12,4,11,5,3];
// old method
let max=0;
for(let i=0; i<ar.length; i++){
    if(max<ar[i]){
        max=ar[i];
    }
}
console.log(max);
//reduce method
let maxim=ar.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log(maxim);
console.log("-----------------------------");

//-------------------Default Parameters--------------------------
//Giving a defaullt value to the arguments
function sumNo(a,b=2){
    return a+b;
}
console.log(sumNo(5,6));  //a=5,b=6   result=11
console.log(sumNo(5));    //a=5,b=2   result=7

//Default parameters ko hum last me likhte h nhi to wrong function hota hai
function sum1(a=2,b){   //wrong function
    return a+b;
}
console.log(sum1(5,6)); //a=5,b=6           result=11
console.log(sum1(5));   //a=5,b=undifined   result=nan

//-----------------------Spread--------------------------------------Opposite-Rest
//single value -> multiple values.
//Expands an iterable(iterate) into multiple values.
//iterable-(array/string)
//function func(...arr){
//     //do something
// }
//Normal code
console.log(1,2,3,1,2,3,0,3,4,2,1,4,3,1,2);
console.log(Math.min(1,2,3,1,2,3,0,3,4,2,1,4,3,1,2));
console.log(Math.max(1,2,3,1,2,3,0,3,4,2,1,4,3,1,2));
//spread use in array
// arrrss=[1,2,3,4,5] == [...arrrss];
let arrs=[1,2,3,1,2,3,0,3,4,2,1,4,3,1,2]
console.log(arrs);
console.log(...arrs);
console.log(Math.min(arrs));        //result - NaN
console.log(Math.min(...arrs));
console.log(Math.max(...arrs));
//spread use in string 
console.log("apnacollege");
console.log(..."apnacollege");

//-------------Spread (Array Literals)------------------------
let arrr=[1,2,3,4,5];
console.log(arr);
let newArrr=[...arrr];
console.log(newArrr);
newArrr.push(6);
console.log(newArrr);

let chars=[..."hello"];
console.log(chars);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let numss =[...even, ...odd];       //order importent
console.log(numss);

//-------------Spread (Object Literals)-----------------------
const data = {
    email: "iroman@gmail.com",
    password: "abcd",
};
console.log(data);

const dataCopy = {...data};
console.log(dataCopy);

const dataCopy1 = {...data, id: 123, country: "India"};
console.log(dataCopy1);

let ar11=[1,2,3,4,5];   //value
let obj11={...arr};     //obj-> key: value  || array me key nhi hote hai isi liye index = key
console.log(obj11);

let obj12={..."hello"};
console.log(obj12);


//------------------------------Rest-------------------------------------Opposite-Spread
//multiple values -> single value
//Allows a function to take an indefinite number of arguments and bundle them in an array
// function sum(...args){
//     return args.reduce((add,el)=>add+el);
// }
function sumNum(...args){   //arguments
    for(let i=0; i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}
sumNum(1);
sumNum(1,2);
sumNum(1,2,3,4,);

function min(...args){
    console.log(args);
    console.log(arguments);
    console.log(arguments.length);
    // console.log(arguments.push(10));    //arguments is not array. It is a collection
}                                          //push, pop, map etc array ke mathod hai
min(1,2,3,4,5,6);

// function sum(arguments){     // arguments ke sath function used nhi kar sakte hai
//     return arguments.reduce((sum,el)=>sum+el);  //arguments[i]
// }
// sum(1,2);

function sum(...args){
    return args.reduce((sum,el)=>sum+el); 
}
console.log(sum(1,2,3,4));
console.log(sum(123,153,-34));

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
console.log(min("hello",23,15,3));
console.log(min(10,23,15,3));   //10 msg arguments hai 

//create by ad check arrow function in function
// let minA=(msg,...args)=>{
//     console.log(msg);
//     return args.reduce((mina,el)=>{
//         if(mina>el){
//             return el;
//         }else{{
//             return mina;
//         }}
//     });
// };


//---------------------------Destructuring------------------------

let names=["tony","bruce", "peter", "steve","abc", "xyz","pqr"];
// let winner = names[0];    //create variable multiple
// let runnerup = names[1];
// let secondRunnerup = names[2];

// variable destructuring me [] used karte hai
let [winner, runnerup, secondRunnerup, ...other]=names;   //use variable and rest concept
console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(other);     //rest concept nhi used karte ...other ki jagah other likhte to other me steve print hota

//--------------Destructuring (Objects)-------------------------
const student ={
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
    city: "Puna",
}
// let username=student.username;   //normal difine
// let password=student.password;

//Objects destructurin me {} used karte hai
//method1
// let {username, password}=student;   //same variable namme  in student key
// console.log(username);
// console.log(password);

//method2
let{username: user,password: secret, city: place="Mumbai"}=student;
// console.log(username);   //not difine
// console.log(password);   //not difine
console.log(user);
console.log(secret);
//priority Object(student) value 
// console.log(city);  //city not difine 
console.log(place)


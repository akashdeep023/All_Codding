//Qs-1 Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[2,4];
let averageSquareSume =(avg)=>{
    let sqrArr = arr.map((el)=>el*el);
    console.log(sqrArr);
    let sumArr = sqrArr.reduce((sum,el)=>sum+el);
    console.log(sumArr)
    console.log(sumArr/avg.length);
}
averageSquareSume(arr);

//Qs-2 Create a new array using the map function whose each element is equal to the original elements plus5.
let arr1=[2,3,6,4,7,12,9];
console.log(arr1.map((el)=>el+5));

//Qs-3 Create a new array whose elements are in uppercase of words present in the original array.
let name =["akash","ashu","jack","god"];
// name.forEach(el => {     //element uppercase but not create array
//     console.log(el.toUpperCase());
// });
console.log(name.map((el)=>el.toUpperCase()));

//Qs-4 Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
let arrr =[4,6,2,8,15,13,9,6];
const doubleAndReturnArgs = (arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
console.log(doubleAndReturnArgs(arrr,2,5));
console.log(doubleAndReturnArgs([3,5,23,63,21],9,7,12));

//Qs-5 Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const obj1={
    name: "akash",
    age: 22,
}
const obj2 = {
    city: "Delhi",
    marks: 90,    
}
const mergeObjects =(a,b)=>({...a, ...b});
console.log(mergeObjects( obj1, obj2));
console.log(mergeObjects({name: "a", age: 22}, {city: "Haryana",marks: 94}));
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); 




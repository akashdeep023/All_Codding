//Practice Qs-1
//Check if all numbers in our array are multiples at 10 or not.
// let arr=[12,15,20,22,17,10];
let arr=[20,10,20,40,30,60];
let mulCheck=arr.every((el)=>el%10==0);
console.log(mulCheck);

//Practice Qs-1
//Create a function to find the min number in an array.

let arr1=[8,3,6,7,9,1,10];
function getMin(arr){
    let minNum =arr.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return minNum;
}
console.log(getMin(arr1));

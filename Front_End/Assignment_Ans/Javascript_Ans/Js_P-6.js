//Qs-1 Write a javascript function that returns array alements larger than a number.
let array =[12,43,24,54,23,73,43,32,45,62,9];
let num=50;
function largerElement(array,num){
    for(let i=0; i<array.length; i++){
        if(num<array[i]){
            console.log(array[i]);
        }
    }
}
largerElement(array,num);
console.log("--------------------------");

//Qs-2 Write a javascript function to extract unique characters from a string.
let str="abcdabcdefgggh";   //ans="abcdefgh"
function uniqueStr(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        let currChar=str[i];
        if(ans.indexOf(currChar)== -1){     //if current character is not added, then add it in ans
            ans+=currChar;                  //Ohterwise it is a duplicate.
        }
    }
    return ans;
}
console.log(uniqueStr(str));
console.log("--------------------------");


//Qs-3 Write a javascript function that accepts a list of country names as input and returns the longest country name as output.
let country = ["Australia", "Germany", "United States of America"];     //output="United States of America";
function longestStr(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        if(ans.length<str[i].length){
            ans=str[i];
        }
    }
    return ans;    
}
console.log(longestStr(country));
console.log("--------------------------");


//Qs-4 Write a javascript function to count the number of vowels in a string argument.
let str1="apnacollege";
function countVowel(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowel(str1));
console.log("--------------------------");


//Qs-5 Write a javascript function to generate a random number within a range (start, end).
let start = 100;
let end = 200;
function generateRandomNo(start,end){
    let randomNo=Math.floor(Math.random()*(end-start))+start;
    console.log(randomNo);
}
generateRandomNo(start,110);

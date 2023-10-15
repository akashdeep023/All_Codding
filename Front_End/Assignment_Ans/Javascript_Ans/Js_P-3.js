// Question - 1
    let arr1=[7,9,0,-2];
    let n1=3;
    let ans1=arr1.slice(0,n1);
    console.log(ans1);

//Question - 2
    let arr2=[7,9,0,-2];
    let n2=3;
    let ans2=arr2.slice(arr2.length-n2);
    console.log(ans2);

//Question - 3
//Write a javascript program to check whether a string is blank or not.
    let str=prompt("Enter a string");
    if(str.length==0){
        console.log("String is empty");
    }else{
        console.log("String is not empty");
    }

// Question - 4
// Write a javascript program to test whether the character at the given (character) index is lower case.
    let str1="ApNaCoLlEgE";
    let idx=3;
    if(str1[idx]==str1[idx].toLowerCase()){
        console.log("character is lowercase");
    }else{
        console.log("character is not lowercase");
    }

//Question - 5
//Write a javascript program to strip leading and trailing spaces from a string.
    let str2=prompt("Enter a string");
    console.log("Original string :",str2);
    console.log("String without space :",str2.trim());

//Question - 6
//Write a javascript program to check if an elements exists in an araya or not.
    let arr3=["hello", 'a', 23, 64, 99, -6];
    let item=-6;
    if(arr3.indexOf(item)==-1){
        console.log("Element doexn't exits in array");
    }else{
        console.log("Element exits in array");
    }








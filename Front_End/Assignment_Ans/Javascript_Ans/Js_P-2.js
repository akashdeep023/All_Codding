//Question 1. 
    let num=80;
    if(num%10===0){
        console.log("Good");
    }else{
        console.log("Bad");
    }

//Question 2.
    // let Name=prompt("Enter your name.");
    // let age=prompt("Enter your age.");
    //     // let msg=Name+" is "+age+" years old.";
    //     // alert(msg);
    // alert(`${Name} is ${age} years old.`);

//Question 3.
    let month=2;
    switch(month){
        case 1 : console.log("January, February, March");
            break;
        case 2 : console.log("April, May, June");
            break;
        case 3 : console.log("July, August, September");
            break;
        case 4 : console.log("October, November, December");
            break;
        default : console.log("Wrong month no.")
    }

//Question 4.
    let str="akashd";
    if((str[0]==="A" || str[0]==="a") && str.length>5){
        console.log("Golden string");
    }else{
        console.log("Not a golden string");
    }

//Question 5.
    let no1=5;
    let no2=10;
    let no3=8;
    if(no1>no2 && no1>no3){
        console.log(no1, "is largest");
    }else if(no2>no1 && no2>no3){
        console.log(no2, "is largest");
    }else{
        console.log(no3, "is largest");
    }

    //ya

    let a=5;
    let b=18;
    let c=13;
    if(a > b) {
        if(a > c) {
            console.log(a, "is largest");
        } else {
            console.log(c, "is largest");
        }
    } else {
        if(b > c) {
            console.log(b, "is largest");
        } else {
            console.log(c, "is largest");
        }
    }

// Question 6.
let num1 = 39;
let num2 = 47859;
if( (num1%10) == (num2%10)) {
    console.log("numbers have the same last digit which is",num1%10);
} else {
    console.log("numbers don't have the same last digit");
}
        
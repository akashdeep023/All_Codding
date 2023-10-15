// Practice Qs-1  
    // traffic Light System
let col="red";
if(col==="red"){
    console.log("Stop! light color is red");
}
else if(col==="yellow"){
    console.log("Slow Go. light color is yellow");
}
else if(col==="green"){
    console.log("Go. light color is green");
}

//Practice Qs-2  
    //calculate popcorn prices
let size="S";
if(size==="XL"){
    console.log("Price is Rs.250");
}else if(size==="L"){
    console.log("Price is Rs.200");
}else if(size==="M"){
    console.log("Price is Rs.100");
}else if(size==="S"){
    console.log("Price is Rs.50");
}

//Practice Qs-3  
//A "good string" is a string that starts with the letter 'a' & has a length > 3. write a Program to find  if a string is good or not.
let str="akash";
if(str[0]==='a' && str.length > 3){
    console.log("Good string");
}
else{
    console.log("Not good string");
}

let num=12;
if((num%3===0) && ((num+1===15) || (num-1===11))){
    console.log("safe");
}else{
    console.log("unsafe");
}

//Practice Qs-4  
//use switch statement to print the day of the week using a number variber 'day' with values 1 to 7.
let day = 2;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");    
        break;
    default :
        console.log("Wrong day");    
}
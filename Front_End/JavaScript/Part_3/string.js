    //STRING Methods-----------------------
    //Apply methods - Create a new string
//str.trim()       
//trims whitespaces from both ends of string & returns a new one.
    let msg="  Hello  ";
    console.log(msg);
    let Nmsg=msg.trim();
    console.log(Nmsg);

    // ex---
    // let password=prompt("Enter your password.");
    // let Npassword=password.trim();
    // console.log("Trim password :",Npassword);
    // console.log("Password : ",password);

//string are Immutable in Javascript.--------
    //Whenever we do try to make a change, a new string is created and old one remains same.

//str.toUpperCase()
//str.toLowerCase()
    let str="Random string";
    console.log(str.toUpperCase());
    console.log(str.toLocaleLowerCase());
    console.log(str.toLowerCase());
    console.log(str);

//String Methods width Arguments
//argument is a some value that we pass to the method.
//str.method(arg);
    //indexOf()
    let ms= "ILoveCoding";
    console.log(ms.indexOf("Love"));
    console.log(ms.indexOf("love"));
    console.log(ms.indexOf("o"));
    console.log(ms.indexOf("z"));

//Method Chaining
    let ms1="   hello   ";
    let newms1=ms1.trim();
    console.log("after trim :",newms1);
    newms1=ms1.toUpperCase();
    console.log("after uppercase :",newms1);
    let newMs1=ms1.trim().toUpperCase();
    console.log("after trim & uppercase :", newMs1);

//slice
//str.slice(si,ei)     si-includ, ei-none includ
    let str1="ILoveCoding";
    console.log(str1.slice(5));
    console.log(str1.slice(1,5));
    // str.slice(-num) = str.slice(str.length-num)
    console.log(str1.length)
    console.log(str1.slice(-10)); //11-10=1

//replace
    let str2="ILoveCoding";
    console.log(str2.replace("Love","Do"));
    console.log(str2.replace("o","x"));
    console.log(str2);  //main string me change nhi hota hai

    console.log("apnaapna".replace("apna","college"));

//repeat
    let str3="Mango";
    console.log(str3.repeat(3));


//split Method ---- without delta course -----
    // The split() method splits a string into an array of substrings.
    // The split() method returns the new array.
    // The split() method does not change the original string.
    // Convert string to array--
    let text = "How are you doing today?";
    const myArray = text.split(" ");        //split the words
    console.log(myArray);
    const myArray1 = text.split("");        //split the characters, including spaces
    console.log(myArray1);
    const myArray2 = text.split(" ", 3);    //limit parameter
    console.log(myArray2);






    // The slice() Method
    // The substr() Method    
    // The substring() Method
// -----------------------------------------Async Function---------------------------------
//Creates an Async Function with Async Keyword-----
//Every Async Function return - Promise ----------------------

async function greet(){                 //use async keyword befor function word
    // throw "some random error";       //create error with 'throw'
    // throw "404 page not found";      //only single error throw in a function
    return "hello";
}
greet()
    .then((result)=>{
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((err)=>{
        console.log("promise was rejected with err : ",err);
    })


let demo = async()=>{       //async with arrow function
    return 5;
}
console.log(demo());

//---------------------------------------Await Keyword--------------------------------------
//pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)
//await keyword se sabhi asynd function ko wait karata hia
//await keyword onlu use async function
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    })
}
// async function getDemo(){
//     await getNum();     //jab tak await ka call resolve nhi haga baki call print nhi hoga
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }   

// getDemo();

//ex---------change color----------

// let h1 = document.querySelector('h1');
// function changeColor(color,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             h1.style.color = color;
//              console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         }, delay);
//     })
// }
// async function colorDemo(){              //jaha promise use hote hai waha await keyword use karte hia or vo funx async hone chahiye
//     await changeColor("red",1000)
//     await changeColor("green",1000)
//     await changeColor("blue",1000)
//     changeColor("yellow",1000)

// }
// colorDemo();

//---------------------------------------Await Keyword (Handling Rejection)--------------------------------------
//Handling Rejection with Await-------

let h1 = document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
             console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    })
}
async function colorDemo(){              //jaha promise use hote hai waha await keyword use karte hia or vo funx async hone chahiye
    try{
        await changeColor("red",1000)
        await changeColor("green",1000)
        await changeColor("blue",1000)
        await changeColor("yellow",1000)
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5; 
    console.log(a);
    console.log("new number = ",a+3);
}
colorDemo();




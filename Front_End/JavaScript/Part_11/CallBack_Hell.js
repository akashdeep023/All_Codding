// ------------------------------------    -------Call Stack---------------------------------------------
//-----------------------------------------------Callback Hell----------------------------------------------------------
//Asynchronous Nature se 1st problem
let h1 = document.querySelector('h1');

// h1.style.color = "red";      //single color

// setTimeout(() => {              //multi color
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "green";
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "blue";
// }, 3000);

// function changeColor(color,delay){  //fnx ko Asynchronous banane ke liye setTimeout function add krege
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);        
// }
// changeColor("red",1000);
// // changeColor("green",1000);
// // changeColor("blue",1000);
// changeColor("green",2000);
// changeColor("blue",3000);

// h1 ka red color hone pe hi green or green color hone pe blue hona chahiye 
//iske liye fnx(changeColor) me callback add krna hoga

function changeColor(color,delay,nextChangeColor){  
    setTimeout(() => {
        h1.style.color = color;
        if(nextChangeColor) nextChangeColor();
    }, delay);        
}

changeColor("red", 1000,()=>{               //callbacks nesting -> callback hell
    changeColor("green",1000, ()=>{
        changeColor("blue",1000,()=>{
            changeColor("orange",1000,()=>{
                changeColor("yellow",1000);
            });
        })
    })
})

//callback Hell se bachne ke liye -> promises || async & await

//-------------setting up for promises------------------------
//-------------refactoring with promises-------------------------
//--------------then() and catch() methods-----------------------
//--------------promise chaining----------------------------------
//--------------result & error(arg) in promises -----------------

    //print ex- change color to promise.js

//Java Script(Part-12)----------------------------------------------------------------------------------
//------------------async Functions------------------------------
//------------------await Keyword--------------------------------

    //print ex- change color to Async_fnx.js

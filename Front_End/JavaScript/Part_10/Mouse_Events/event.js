//-------------------------------------Mouse/Pointer Events----------------------------------------
// onclick-------------------------------------------set single event 
let btn = document.querySelector('button');
console.dir(btn);
console.log(btn.onclick);   //null - kyo ki abhi null hai

btn.onclick = function(){
    console.log("button was clicked");
    alert("button was clicked!");
}
console.log(btn.onclick);   //print function

function sayHello(){
    alert("Hello");
}
btn.onclick = sayHello;     //Single button

let btns = document.querySelectorAll('button');     //All button
for (const btn of btns) {
    btn.onclick = sayHello;     //yaha pe sayHello() nhi kerege nhi to pahle hi alert show hoga
}
// onmouseenter--------------------------------------
for (const btn of btns) {
    btn.onmouseenter = function(){
        console.log("you enter(hover) a button");
    }
}







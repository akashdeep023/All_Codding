//----------------------------------------Mouse Event Listeners------------------------------------------
//addEventListener -------------------------------------set multi event

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Apna college");
}
let btns = document.querySelectorAll('button');     //All button
for (const btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;      //run last onclick event

    // btn.addEventListener("click", sayHello);     //click mouse eventListener hai
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me");
    });

}

//------------------------------------------Activity------------------------------------------------------
//rgb.html me hai

//----------------------------------------------Event Listeners for Elements----------------------------------
let p = document.querySelector('p');
p.addEventListener("click", function(){
    console.log("para was clicked");
});
let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){   //mouseenter mouse eventListener hai
    console.log("mouse inside box");
});



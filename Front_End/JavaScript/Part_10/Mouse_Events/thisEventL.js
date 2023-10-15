//-------------------------------------------this in Event Listeners-------------------------------------
//When 'this' is used in a callback of event handler of something, it refers to that something.
//obj - event listener/handler (event,callback - this)
//this ka most benifite multi type element ke uper ak eventListener use ho
let btn = document.querySelector('button');

// btn.addEventListener("click",function(){
//     // console.log(this);
//     // console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
    
// });


// multi type element---------------------- use same fuction repeate
function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

// h1.addEventListener("click",function(){
    //     console.log(this.innerText);
    //     this.style.backgroundColor = "blue";
// });    
// h3.addEventListener("click",function(){
    //     console.log(this.innerText);
    //     this.style.backgroundColor = "blue";    
// });
// p.addEventListener("click",function(){
    //     console.log(this.innerText);
    //     this.style.backgroundColor = "blue";        
// });
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);



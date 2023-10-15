//Add the following elements to the container using only JavaScript and the DOM methods.
//1. a <p> with red text that says "Hey I'm red!"
//2. an <h3> with blue text that says "I'm a blue h3!"
//3. a <div> with a black border and pink background color with the following elements inside of it:
//      * another <h1> that says "I'm in a div"
//      * a <p> that say "ME TOO!"
let body = document.querySelector('body');
let p = document.createElement('p');
p.innerText = "Hey I'm red!";
// p.style.color = "red";          //inline style 
p.classList.add("red");
body.append(p);

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
// h3.style.color = "blue";        //inline style 
h3.classList.add("blue");
body.append(h3);

let div = document.createElement('div');
// div.style.border = " 1px solid black ";  //inline style 
// div.style.backgroundColor = "pink";      //inline style 
div.classList.add("div");
body.append(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.append(h1);

let divP = document.createElement('p');
divP.innerText = "ME TOO!";
// h1.insertAdjacentElement('afterend',divP);
div.append(divP);

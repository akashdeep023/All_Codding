//Qs 1. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";
let body = document.querySelector('body');
let inputTag =document.createElement('input');
let buttonTag =document.createElement('button');
buttonTag.innerText = "Cleck me";
body.append(inputTag);
body.append(buttonTag);

//Qs 2. Add following attributes to the element:
//      - Change placeholder value of input to "username"
//      - Change the id of button to "btn"
inputTag.setAttribute('placeholder',"username");
buttonTag.setAttribute('id','btn');

//Qs 3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");

//Qs 4. Create an h1 element on the page and set its text to "DOM Practice " underlined. Change its color to purple.
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
body.append(h1);
h1.classList.add("h1Style");

//Qs 5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is Bold.
let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(para);




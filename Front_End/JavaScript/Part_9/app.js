//--------Manipulating any item and showing inspect options on the element-----------

//select in console
console.dir(document);
console.log(document);
console.log(document.all);
console.log(document.all[8]);
console.log(document.all[8].innerText);

console.log("---------------------------------------------");

//Selecting Element by ID - getElementById ---------------------------------------
//Returns the Element as an object or null (if not found)
let imgObj = document.getElementById("mainImg");        //method
console.dir(imgObj);
console.log(imgObj);
console.log(typeof imgObj);     
console.log(imgObj.src);
imgObj.src = "assets/creation_3.jpeg"
console.log(imgObj.src);
console.log(imgObj.id);
console.log(imgObj.tagName);

console.dir(document.getElementById("description"));

console.dir(document.getElementById("abcd"));   //null

console.log("--------------------------------------------");

//Selecting Element by Class Name - getElementByClassName ---------------------------------------
//Return the Elements as an HTML Collection or empty collection (if not found)
console.log(document.getElementsByClassName("oldImg"));
let smallImages = document.getElementsByClassName("oldImg");
console.dir(smallImages);
console.dir(typeof smallImages);
console.dir(smallImages[1]);
console.dir(typeof smallImages[1]);
console.dir(smallImages[1].src);
for(let i=0; i<smallImages.length; i++){
    // console.dir(smallImages[i]);
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no ${i} is changed.`);
}

console.log(document.getElementsByClassName("abacs"));  //HTMLCollection[] - length 0

console.log("--------------------------------------------");

//Selecting Elements by Tag Name - getElementByTagName ------------------------------------------
//Returns the Elements as an HTML Collection or empty collection (if not found)
let paragraphTag = document.getElementsByTagName("p");      //select all p tag
console.dir(paragraphTag);
console.dir(paragraphTag[1]);               //select 1 index p tag
console.log(paragraphTag[0].innerText);     //select 0 index p tag

console.dir(document.getElementsByTagName("b"));
console.dir(document.getElementsByTagName("span")); //HTMLCollection[] - length 0

console.log("--------------------------------------------");

//Query Selectors -----------------------------(Most use for selectors)---------------------------------------------
//Allows us to use any CSS selector
//querySelector() = Select first element
let querySelectorp = document.querySelector('p');            //selects first p element
console.dir(querySelectorp);
let querySelectorid = document.querySelector('#mainImg');   //selects first element with id = mainImg
console.dir(querySelectorid);
console.dir(document.querySelector('.oldImg'));             //selects first element with class = oldImg
console.dir(document.querySelector('div a'));               //selects first element with div>a
// querySelectorAll() = Select all element
console.dir(document.querySelectorAll('p'));            //selects first p element
console.dir(document.querySelectorAll('div a'));            //selects all element with div a

console.log("--------------------------------------------");

//Setting Content in Objects -------------------------------------------------------------------
let para = document.querySelector('p');
console.dir(para);
//innerText - Shows the visible text (screen) contained in a node---------
console.log(para.innerText);
//innerHTMl - Shows the full markup (full html code)---------------
console.log(para.innerHTML);
//textContent - Shows all the full text (show hidden text)-------------
console.log(para.textContent);
para.innerText="Hi, I am Peter Parker";
para.innerText="Hi, I am <b>Peter Parker</b>";
para.innerHTML="Hi, I am <b>Peter Parker</b>";

let heading = document.querySelector('h1');
console.dir(heading);
// heading.innerHTML="<u>Spider Man</u>";
heading.innerHTML = `<u>${heading.innerText}</u>`;

console.log("--------------------------------------------");

//Manipulating Attributes ------------------------------------------------------------------
//getters and setters
//obj.getAttribute('x');-------------
//obj.setAttribute('x','name');------------
let img = document.querySelector('img');
console.dir(img);
img.setAttribute('id','spidermanImg');
console.log(img);
img.setAttribute('src',"assets/creation_1.png");
// console.log(img.getAttribute('class'));
// img.setAttribute('class','images');          //one time me one class hi used karte hai other class remove ho jata hia
// console.log(img.getAttribute('class'));

console.log("--------------------------------------------");

//Manipulating Style (with style attribute) ----------------------------------------------------
//obj.style
let head = document.querySelector('h1');
console.dir(head.style);                //shows only inline style property
head.style.color = 'purple';            //inline style property set
console.log(head.style.color);
head.style.backgroundColor = 'yellow';

let links = document.querySelectorAll('div a');
// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'green';
// }
for (link of links) {
    link.style.color='purple';
}

console.log("--------------------------------------------");

//classList Property -------------------------------(Most use for class property---------------------------------------------
//using classList-----------
let spiderImg = document.querySelector('img');
console.log(spiderImg.classList)

let h2Tag=document.querySelector('h2');
console.dir(h2Tag);
console.log(h2Tag.classList);
//classList.add() - to add new classes-----------
h2Tag.classList.add("underline");
h2Tag.classList.add("green");
//classList.remove() - to remove classes------------
h2Tag.classList.remove("green");
// h2Tag.setAttribute('class', 'green');       //only green class used and all class remove
//classList.contains() - to check if class exists--------------
console.log(h2Tag.classList.contains('underline'));
console.log(h2Tag.classList.contains('green'));
//classList.toggle() - to toggle between add & remove-------------
//toggle = switch || on -> off | off -> on
console.log(h2Tag.classList);
h2Tag.classList.toggle('underline');    //exist ho to remove print flase
h2Tag.classList.toggle('green');        //not exist ho to add print true
h2Tag.classList.toggle('underline');    //not exist ho to add print true
console.log(h2Tag.classList);

let box = document.querySelector('.box');
// box.setAttribute('class', 'yellowBg')   //agar setAttribut('class','abc'); karte ho to box ka sirf abc class hota .box ka property nhi rahega
console.log(box.classList);         
box.classList.add('yellowBg');

//Navigation on Page ---------------------------------------------------------------------------
let h4 = document.querySelector('h4');
let box1 = document.querySelector('.box');
let ul = document.querySelector('ul');
//parentElement--------------------
console.log(h4.parentElement);
console.log(ul.parentElement);
//children --------------------
console.log(h4.children);
console.log(box1.children);
console.log(box1.childElementCount);
console.log(ul.children);
//previousElementSibling | nextElementSibling ----------------
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

let imge = document.querySelector('img');
console.log(imge.previousElementSibling);
imge.previousElementSibling.style.color="green";

//Adding Elements on Page ---------------------------------------------------------------------------
//document.createElement('p');
let newP = document.createElement('p');      //create p tag single element but not place 
console.log(newP);                           //place ke liye append or etc method used karte hai
newP.innerText = "Hi, I am a new p.";
let butt = document.createElement('button');
butt.innerHTML = "<b>Click me!</b>";
let body =document.querySelector('body');
let boxx =document.querySelector('.box');
//appendChild(element)----------- place last 
body.appendChild(newP);     //newP single element 
boxx.appendChild(newP);
boxx.appendChild(butt);
//append(element)--------------add in last  (element/string/text)   ---Most use---
newP.append(" This is new text.");
newP.append(butt);
newP.append(" Do not click this button");
//prepend(element)---------------add in start
box.prepend(newP);
butt.prepend("# ")
//insertAdjacentElement(where, element)---------------
let bt = document.createElement('button');
bt.innerText = "Danger";
let p = document.querySelector('p');
// p.insertAdjacentElement("beforebegin",bt);       //p tag start se pahle
// p.insertAdjacentElement("afterbegin",bt);        //p tag start ke start me
// p.insertAdjacentElement("beforebegin",bt);       //p tag end se pahle
p.insertAdjacentElement("afterend",bt);             //p tag end ke end me

//Removing Elements from Page ----------------------------------------------------------------------
//removeChild(element)-----------------
body.removeChild(bt);   //remove button
//remove(element)-------------------    -----Most use----
h4.remove();
butt.remove()

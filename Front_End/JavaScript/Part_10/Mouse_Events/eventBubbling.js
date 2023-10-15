//Event Bubbling
//jab bhi nexted element hote hai or har kisi ka alag eventListener hota hai hai to sabse andar wala element ka eventL triger huaa to uske bahar wale element ko bhi eventL triger karega 
//Stop event Bubbling Method - event.stopPropagation() 
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener("click",function(){
    console.log("div was clicked");
})
ul.addEventListener("click",function(event){
    event.stopPropagation();        //stop bubbling
    console.log("ul was clicked");
})
for (const li of lis) {
    li.addEventListener("click",function(event){
        event.stopPropagation();    //stop bubbling
        console.log("li was clicked");
    });
}
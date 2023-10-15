// Qs-1. Try out the following events in EventListener on your own :
//    - mouseout / keypress / Scroll / load    [Use MDN for help]
//------Mouseout-------
let texts = document.querySelectorAll("li");
for (const text of texts) {    
    text.addEventListener("mouseup",function(){
        console.log("mouseout");
    this.style.color = "red";
    setTimeout(() => {
            text.style.color="";
        }, 500);
    });
};

//-------Scroll---------
let scr = document.querySelector(".page");
let scrE = document.querySelector(".scro");
scr.addEventListener("scroll",function(){
    scrE.innerText = "Scrolling";
    setTimeout(() => {
        scrE.innerText = "Waitting for scroll..";        
    }, 1000);
})

//Qs-2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button's color to green when it is clicked.
let bt = document.createElement('button');
bt.innerText= "Click me";
document.querySelector('body').append(bt);
bt.addEventListener("click",function(){
    bt.style.backgroundColor = "green";
});


//Qs-3. Create an input element on the page with a placeholder "enter your name" and an H2 heading on the page inside HTML.
//The purpose of this input element is to enter a user's name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
//Whenever the user inputs their name, their input should be dynamically visible inside the heading.
//[Please not that no other character apart from the allowed characters should be visible in the heading]
let h2 = document.querySelector('h2');
let inp = document.querySelector('input');
inp.addEventListener("input",function(){
    console.log(this.value);
    
    const validInput = inp.value.replace(/[^a-zA-Z\s]/g, '');   // Remove invalid characters
    // const validInput = inp.value.replace(/[^0-9\s]/g, '');   // Remove invalid characters
    inp.value = validInput;

    
    h2.innerText = validInput;  // Update heading text
    // h2.innerText = this.value;

})
console.log("1 akash. deep@12".replace(/[/^a-zA-Z\s ]/g, ''));
console.log("1 akash. deep@12".replace(/[/^0-9\s ]/g, ''));

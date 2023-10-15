//-----------------------------------------------Form Events----------------------------------------------------
let form = document.querySelector('form');
form.addEventListener("submit",function(){
    // alert("form submited");
})
form.addEventListener("submit",function(event){
    // event.preventDefault();     //submit karne pe default sari event nhi hoga / action link pe redirect nhi hoge
    // alert("form submited");
})

//--------------------------------------------Extracting Form Data-------------------------------------------
form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp = document.querySelector('input');
    // console.dir(inp);
    // console.log(inp.innerText);     //input me innerText null hota hai
    // console.log(inp.value);
});

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
    // let user = document.querySelector('#user');
    let user = this.elements[0];                    //form.elements[0]
    // let pass = document.querySelector('#pass');
    let pass = this.elements[1];
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

//-----------------------------------------------More Events ---------------------------------------
//change event---------------
//The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
//form ka event.preventDefault(); karna hoga ye 21 line me hai

let user = document.querySelector('#user');
user.addEventListener("change",function(){      //change event - initial to final stage ke bich track karta hai
    console.log("change event");
    console.log("finala value = ",this.value);
});

//input event-----------------
//The input event fires when the value of an <input>, <select>, or <textarea> elements has been changed.
user.addEventListener("input",function(){      //input event - only click character key input event ko triger karti hai
    console.log("input event");
    console.log("finala value = ",this.value);
});





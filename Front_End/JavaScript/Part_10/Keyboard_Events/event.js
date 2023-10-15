// Mouse Event
let btn = document.querySelector('button');
//Ex-1
// btn.addEventListener("click", function(event){  //callback me function ke arg me event/e/evt etc. likhte hai to
//     // console.log(event);                      //event print karne se mouse event print hota hai
//     console.dir(event);
//     console.log("button clicked");
// })
//Ex-2
// btn.addEventListener("dblclick", function(e){  //callback me function ke arg me event/e/evt etc. likhte hai to
//     console.dir(e);                            //event print karne se event print hota hai
//      console.log("button double clicked");
// })

//----------------------------------------Keyboard Events ---------------------------------------------
let inp = document.querySelector('input');
inp.addEventListener("keydown",function(){      //keydown keyboard eventListener hai
    // console.log("key was pressed");
})
inp.addEventListener("keyup",function(){      //keyup keyboard eventListener hai
    // console.log("key was released");
})

//Keyboard Event
inp.addEventListener("keydown",function(event){
    // console.dir(event);
    // console.log("key = ",event.key);
    // console.log("code = ", event.code);
    // console.log("key was pressed");
});

// create logic with arrow key and key

inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);  //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if(event.code == "ArrowUp" || event.code == "KeyU"){
        console.log("character moves up");
    }else if(event.code == "ArrowDown" || event.code == "KeyD"){
        console.log("character moves down");
    }
    else if(event.code == "ArrowLeft" || event.code == "KeyL"){
        console.log("character moves left");
    }else if(event.code == "ArrowRight" || event.code == "KeyR"){
        console.log("character moves right");
    }
});






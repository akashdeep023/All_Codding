//----------------------------------------------Promises-------------------------------------
//The Promise object represents the eventual completion(success) (or failure) of an asynchronous operation and its resulting value.

//ex ---
// function savetoDb(data,success,failure){                    //function---
//     let internetConnection = Math.floor(Math.random()*10+1);    //1-10
//     if(internetConnection > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("Apna College",                                    //calling---
//     ()=>{
//         console.log("success : your data was saved");
//         savetoDb("hello world",
//             ()=>{
//                 console.log("success2 : data2 saved");
//                 savetoDb("akash deep",
//                     ()=>{
//                         console.log("success3 : data3 saved");
//                     },
//                     ()=>{
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     ()=>{
//         console.log("failure : weak connection. data not saved");
//     }
// );

//uper ka code asynchronous hai (ak dusre pe depend hai) isse bachne ke liye Promise ko use karte hai
//Promises -> object hai
//Promises -> resolve(success) & reject(failure) hote hai
// PromiseState -> fulfilled, success, pending

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetConnection = Math.floor(Math.random()*10+1);    //1-10
        if(internetConnection > 4){
            resolve("success : data was saved");
        }else{
            reject("failure : weak connection");
        }
    });
}

// console.log(savetoDb("apna college"));

//-----------------------------------------Promises Methods - then() & catch()------------------------------------------
//Promise -> fulfilled -> .then() || reject -> .catch()
// savetoDb("apna college")
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

//----------------------------------------------Promises chaining-------------------------------------------------------
//promise chaining <- callback ka kaam 
//.then() method multiple time but .catch() method single time

// savetoDb("apna college")
//     .then(()=>{                                 //save multi data but show alert---
//         console.log("data was saved.");
//         savetoDb("hello world")
//             .then(()=>{                          //use nexted not emprove promise-------------
//                 console.log("data2 was saveed")
//             })
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

//emprove promise
// savetoDb("apna college")
//     .then(()=>{                                  //save multi data
//         console.log("data was saved.");
//         return savetoDb("hello world");          //promise return     
//     })
//     .then(()=>{
//         console.log("data2 was saved.");
//         return savetoDb("akash deep");           //promise return
//     })
//     .then(()=>{
//         console.log("data3 was saved.");
//     })
//     .catch(()=>{
//         console.log("promise was rejected.");
//     });

//--------------------------------------------Result & Errors in Promises-----------------------------------------
//promises are rejected and resolved with some data (valid results or errors)
//emprove promise with arguments--------------

savetoDb("apna college")
    .then((result)=>{                                   //save multi data
        console.log("data was saved.");
        console.log("result of promise : ", result);
        return savetoDb("hello world");                 //promise return     
    })
    .then((result)=>{
        console.log("data2 was saved.");
        console.log("result of promise : ", result);
        return savetoDb("akash deep");                  //promise return
    })
    .then((result)=>{
        console.log("data3 was saved.");
        console.log("result of promise : ", result);
    })
    .catch((error)=>{
        console.log("promise was rejected.");
        console.log("error of promise : ", error);
    });


//ex----change color--------------------
let h1 = document.querySelector('h1');;
function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            h1.style.color = color;
             console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    })
}

changeColor("red",1000)
    .then(()=>{
        console.log("red color was completed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed")
    })



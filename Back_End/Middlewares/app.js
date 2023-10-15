const express = require("express");
const app = express();

//---------------------------------------------------What are Middlewares?---------------------------------------------------
//Middlewares uses ---------> https://expressjs.com/en/guide/using-middleware.html
//Top 5 middlewares --------> https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503

//---------------------------------------------------Our 1st Middleware---------------------------------------------------
//Middleware ko hamesh uper me rakhte h---------
//app.use() ------------> https://expressjs.com/en/4x/api.html#use
// Define 1st middlewares----------
// app.use((req,res)=>{                          //all route work (define & undefine)
//     console.log("I'm a 1st middleware")
//     res.send("Finish middleware");              //basically middleware me res.send nhi use hota h
// })

//---------------------------------------------------Using next() ---------------------------------------------------
// app.use((req,res,next)=>{                          //all route work (define & undefine)
//     console.log("I'm a 1st middleware")
//     next();                                        //next() ke baad code run ho jaya hai par most develeper next() ke nhi likhte h
// })

// app.use((req,res,next)=>{                          //all route work (define & undefine)
//     console.log("I'm a 2st middleware")
//     next();
// })

//---------------------------------------------------Creating Utility Middleware ---------------------------------------------------
//req property ---------------------------------
//req property ----------> https://expressjs.com/en/4x/api.html#req
//logger-----------------
// app.use((req,res,next)=>{                                         
//     // req.time = new Date(Date.now()).toString();
//     req.time = new Date;
//     console.log(req.method, req.hostname, req.path, req.time);        //check method,hostname,path and others
//     next();
// })

//---------------------------------------------------Exploring app.use() ---------------------------------------------------
//app.use() ------------> https://expressjs.com/en/4x/api.html#use
app.use("/random",(req,res,next)=>{                                 //empty roupt = "/"
    console.log("Hi, I'm only for random middleware");
    next();
})

//---------------------------------------------------API Token as Query String ---------------------------------------------------
// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     console.log(token);
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });
// app.get("/api",(req,res)=>{
//     res.send("Data")
// })

//---------------------------------------------------Passing multiple Middlewares ---------------------------------------------------
const checkToken = (req,res,next)=>{
    let {token}=req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
    // throw new Error("ACCESS DENIED");           //throw error
};
app.get("/api", checkToken,(req,res)=>{     //multiple middlewares
    res.send("Data")
})

//---------------------------------------------------Error Handling (Express Default) ---------------------------------------------------
// express error handling -> https://expressjs.com/en/guide/error-handling.html
// code line no 67 me hai


//---------------------------------------------------Basic route ---------------------------------------------------
app.listen(8080,()=>{
    console.log("server listening to port 8080");
})
app.get("/",(req,res)=>{
    res.send("Hi, I'm root");
})
app.get("/random",(req,res)=>{
    res.send("Hi, I'm random");
})

//404   Middleware ------- route not found than run-----------------------------------------------------------
app.use((req,res)=>{
    res.send("Page not found!");
})



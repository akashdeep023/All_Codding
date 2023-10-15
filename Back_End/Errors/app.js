const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

//middleware--------------------
app.use((req,res,next)=>{
    console.log("Hi, I'm root middleware 1");
    next();
})
// api middleware-----------------
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
         next();
    }
// ---------------------------------------------Custom Error Class---------------------------------------------
    // throw new Error("ACCESS DENIED!")                //express me inbuild Error class hoti hai jo error bhejta h
    throw new ExpressError(401 ,"ACCESS DENIED!")       //create  ExpressError class  jo custome status or message bhejta h
}

app.listen(8080,()=>{
    console.log("server is listening on 8080");
});
//route--------------------
app.get("/",(req,res)=>{
    res.send("Hi, I'm root");
});
app.get("/api", checkToken,(req,res)=>{
    res.send("data")
})
app.get("/err",(req,res)=>{
    abcd = abcd  //ya error bhej rhe hai let use n karke
})

// --------------------------------------------Activity---------------------------------------------
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden");
})


// ---------------------------------------------Error Handling Middleware---------------------------------------------
// ---------------------------------------------Default Status & Message---------------------------------------------
app.use((err,req,res,next)=>{
    let {status =500, message="Some Error Occurred"} = err;
    res.status(status).send(message);                              
})
app.use((err,req,res,next)=>{
    console.log("-----Custom-ERROR-Middleware--------");
    res.send(err);                              
})
app.use((err,req,res,next)=>{
    console.log("-----ERROR-1-Middleware--------");
    // next();                                  //next() ye non erro handling middleware ko req bhejta h
    next(err);                                  //next(err) error handling middleware ko req bheja (ager custom), default express middleware ko req bheja
    // error handler me next(err) hi bhejte hai mostly
})
app.use((err,req,res,next)=>{
    console.log("-----ERROR-2-Middleware--------");
    next(err);                               
})

// ---------------------------------------------Handling Async Errors---------------------------------------------
//in MongoDB_With_Express------------

//404 error  route not found than work (middleware)---------------------
// app.use((req,res)=>{
//     res.send("Page not found")
// })
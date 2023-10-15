const express = require("express");
const app = express();
const users = require("./routers/user.js")
const posts = require("./routers/post.js")
const cookieParser = require("cookie-parser")           //to help parse cookies   

// app.use(cookieParser());
app.use(cookieParser("secretcode"));    //signcookie    (as pass some parameter)

//cookies-----------------
app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namste");           //add cookie
    res.cookie("country","india");
    res.send("sent you some cookies")
})

app.get("/greet",(req,res)=>{
    let  {name = "anonymous"} = req.cookies;
    res.send(`Hi, ${name}`);
})
//signed cookie-------------
app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});    //add sign cookie
    res.send("signed cookie send");
})
//verify cookie-------------
app.get("/verify",(req,res)=>{
    console.log(req.cookies);               //print without signed cookie
    console.log(req.signedCookies);         //verify sing cookie (and print singed cookie)
    res.send("verified");
})


app.get("/",(req,res)=>{
    console.dir(req.cookies);       //print cookies (direct req se cookies ko parse nhi kiya jata)
    res.send("Hi,I am root!");      //install npm i cookie-parser
})

app.use("/users",users);
app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listning on 3000");
})


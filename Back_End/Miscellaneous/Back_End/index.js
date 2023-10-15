//------------------------------------------GET & POST Request---------------------------------------
//create package.json - npm init -y (sort form)
//install express - npm i express
//create index.js file - touch index.js
const express = require("express");
const app = express();
const port = 8080;

//parse data to all request - req.body
app.use(express.urlencoded({extended: true}));  //middel ware ko use karke urlencoded ko express parse karta hai
app.use(express.json());  //middel(exprress.json()) ware ko use karke json ko express parse karta hai

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

app.get("/register",(req,res)=>{
    console.log(req.query);
    const {user, password} = req.query; //send responce Miscellaneous\Front_End\index.html in form action
    // const data = req.query;
    // console.log(data);
    // res.send(`standard GET response`);
    res.send(`standard GET response. Welcome ${user}`);
})
// app.post("/register",(req,res)=>{
//     res.send("standard POST response")
// })

//------------------------------------------Handling POST Request---------------------------------------
app.post("/register",(req,res)=>{
    console.log(req.body);  //express not understand req.body - add line no 9-> app.use(express.urlencoded({extended: true}));
    const {user, password} = req.body;
    // res.send("standard POST response");
    res.send(`standard POST response. Welcome ${user}`);
})

//------------------------------------------Revisiting JS (OOPS)---------------------------------------
//in Miscellaneous\Front_End\app.js----

//------------------------------------------Object Prototypes (OOPS)---------------------------------------
//in Miscellaneous\Front_End\app.js----

//------------------------------------------Factory Functions---------------------------------------
//in Miscellaneous\Front_End\app.js----

//------------------------------------------New Operator---------------------------------------
//in Miscellaneous\Front_End\app.js----

//------------------------------------------Classes in JS---------------------------------------
//in Miscellaneous\Front_End\app.js----

//------------------------------------------Inheritance---------------------------------------
//in Miscellaneous\Front_End\appObj.js----

//------------------------------------What is Templating---------------------------------------------
// EJS -> Embedded JavaScritp Templates
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
//templat ak fixed layout hote hai jisne multipal result aa sakte hai ager alag-alag information bhar de to
//npm inti -y -> sort form to initialise package.json
//npm install express -> install express
//npm i ejs -> install ejs (i sort form to install)
// const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");      //require path run server - parent folder 

const port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

//------------------------------------Using EJS---------------------------------------------
//ejs ko require nhi karna parta hai kyo ki vo express ke sath by defoult require ho jata hai
app.set("view engine","ejs");       //template (ejs) ke liye view folder banate hai 
//view engine, ejs set karne pe res.render me a file bhejte hai .ejs formate me

app.set("views", path.join(__dirname,"/views")); //set path (parent folder se run server then no error) 

// app.use(express.static("public"));  //static file ko search karne ke liye public folder banate hai 
app.use(express.static(path.join(__dirname,"/public/css")));    //set css path (parent folder se run server then no error)
app.use(express.static(path.join(__dirname,"/public/js")));    //set js path (parent folder se run server then no error)

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");      //express generally views folder me home.ejs file ko khojega || express basically name wise search karta hai to hum home.ejs ya home bhi likh sakte hai create view folder and inside home.ejs 
})
//install ejs language support extantion---
app.get("/hello",(req,res)=>{
    res.send("hello");
})

//------------------------------------Views Directory---------------------------------------------
//agar hum server ko uske parent folder se run karte hai to res.send work karta hai par res.render karta hai kyo ki express view folder ko nhi khoj pata hai isi liye
//parent folder se server ko run karne ke liye hum path = require("path") karte hai
//add line no 12 -> const path = require("path"); 
//or app.set("views", path.join(__dirname, "/views")); set karte hai
//add line no 25 -> app.set("views", path.join(__dirname,"/views"));
//eg - Back_End>nodemon Node_EJS\index.js || Coding>nodemon Back_End\Node_EJS\index.js 

//------------------------------------Interpolation Syntax---------------------------------------------
//Interpolation refers to embedding expressions into markde up text. eg- `this is a ${name}`
// embedding - add karna    
//Documentation - https://ejs.co read tag
//edit on views home.ejs -

//------------------------------------Passing data to EJS---------------------------------------------
//create a file rolldice.ejs in views folder
// app.get("/rolldice",(req,res)=>{
//     res.render("rolldice");
// })
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;   //hum mante hai ki rolldice data base se aa rha hai
    // res.render("rolldice",{num: diceVal});  
    //generally key or value ka name same rakhte hai {diceVal: diceVal} ke badle {diceVal} likh sakte hai
    res.render("rolldice",{diceVal});   //pass data 
});

//------------------------------------Instagram EJS---------------------------------------------
//Create a basic template for instagram page based on following route---
//create a file instagrem.ejs in views folder
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     console.log(username);
//     res.render("instagram",{username});
// })

//------------------------------------Conditional Statements---------------------------------------------
//Adding condition inside EJS----
//try if statement in ejs
//in rolldice.ejs file

//------------------------------------Loops---------------------------------------------
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam","bob","steve","jack"];
//     let {username} = req.params;
//     res.render("instagram",{username,followers});
// })
//in instagram.ejs

//------------------------------------Download data.json---------------------------------------------
//apply data.json 
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram", {data});
    }else{
        res.render("error");
    }
})

//------------------------------------Instagrem Page with EJS---------------------------------------------
//in instagram.ejs

//------------------------------------Serving Static Files---------------------------------------------
//add line no 27 -> app.use(express.static("public")); by defoult hame public name set karte hai
//add line no 28 -> app.use(express.static(path.join(__dirname,"/public")));  set path

//------------------------------------Includes---------------------------------------------
//include sub file -> add all head element
// in instagram.ejs


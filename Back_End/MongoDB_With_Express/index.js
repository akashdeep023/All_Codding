//--------------------------------------------Basic Set Up-------------------------------------------
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");;
const ExpressError = require("./EspressError.js")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}));              //req.body ----- parse
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');    
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');    //Error chapter ka error handling---------
};

app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})
app.get("/",(req,res)=>{
    res.send("Server is working")
});

//--------------------------------------------Creation our Model (Chat)-------------------------------------------
//create Chat model in chat.js-------------
//require Chat -----------
//run => node index.js----------
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets ",
//     created_at: new Date()                     //js me by defoult Date() fnx hota hai. time formate UTC
// })

// chat1.save()
//     .then((res)=>{
//         console.log(res);
//     });

//--------------------------------------------Initialize Database-------------------------------------------
//create init.js file => initialize shample data ------------
//run => node init.js-------------

//--------------------------------------------Index Route-------------------------------------------
app.get("/chats",async (req,res,next)=>{
    try{
        let chats = await Chat.find();
        // console.log(chats);
        // res.send("working");
        res.render("index.ejs",{chats});
    }catch(err){
        next(err);
    }
})

//--------------------------------------------New Route-------------------------------------------
//get -> /chats/new
//post -> /chats
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found");
    // throw new ExpressError();   //without status and message
    res.render("new.ejs");
})

//--------------------------------------------Create Route-------------------------------------------
app.post("/chats",async (req,res,next)=>{
    try{
        let {from,msg,to} = req.body;                   //req.body ko direct paras nhi kar sakte hai use urlencoded-----------
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        // console.log(newChat);
        await newChat.save();                 //async fnx me await use karte hai to, then catch use nhi karte hai
        res.redirect("/chats");
            
        }catch(err){
            // next(new ExpressError(404,"required from  and to properties"));
            // next(Error );
            next(err);
        }
    });

//----------------------------------------------Error chapter -------------------------------------------------
// ---------------------------------------------Using try-catch---------------------------------------------
//use try catch to async function
//----------------------------------------------Error chapter -------------------------------------------------
// ---------------------------------------------Using wrapAsync---------------------------------------------
//create a function ----
function asyncWrap(fn){                 //ye function use karne se try or catch use nhi karte h
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err));
    }
}

//----------------------------------------------Error chapter -------------------------------------------------
// ---------------------------------------------Handling Async Errors---------------------------------------------
//New - Show Route------
//create ExpressError.js  and require-------
//create middleware -----niche me
//throw normal error in without async fnx - /chats/new  pe---------
//add show btn in index.ejs file -------
app.get("/chats/:id",asyncWrap( async (req,res,next)=>{       //async fnx by default next ko call nhi lagata---
        let {id}= req.params;
        let chat = await Chat.findById(id);         //chat id change karege error throw karne ke liye same length ki (a-f or 0-9 tak ka hi) || agar length match nhi hoga to mongosh apna error throw karega...
        if(!chat){
            // throw new ExpressError(404,"Chat not found");   //normal throw me app crush--
            next(new ExpressError(404,"Chat not found"));   //async throw error
        }
        res.render("edit.ejs", {chat});      //hum edit.ejs ko hi rander kar rhe h 
   
    })
);
    
//--------------------------------------------Edit Route-------------------------------------------
//get -> /chats/:id/edit
//put -> /chats/:id
app.get("/chats/:id/edit",async(req,res,next)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id)
        // console.log(chat);
        res.render("edit.ejs",{chat});   
    }catch(err){
        next(err);
    }
})

//--------------------------------------------Update Route-------------------------------------------
app.put("/chats/:id",async (req,res,next)=>{
    try{
        let {id} = req.params;
        let {msg: newMsg} = req.body;
        console.log(newMsg);
        let updatedChat = await Chat.findByIdAndUpdate(id,{msg: newMsg},{runValidators: true,new: true});
        console.log(updatedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

//--------------------------------------------Destroy Route-------------------------------------------
app.delete("/chats/:id",async(req,res,next)=>{
    try{
        let {id}= req.params;
        console.log(id);
        let delChat = await Chat.findByIdAndDelete(id);
        console.log(delChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
})


//----------------------------------------------Error chapter -------------------------------------------------
// ---------------------------------------------Mongoose Errors---------------------------------------------
const handleValidationErr = (err)=>{            //create a function for validation error----
    console.log("This was a Validation error. Please follow rules.")
    console.dir(err.message);
    return err;
}
//mongoose errors hendeling--------
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        // console.log("This was a Validation error. Please follow rules.")
        err = handleValidationErr(err);
    }
    next(err);
})

//Error Handling Middleware--------------------
app.use((err,req,res,next)=>{
    let {status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
})
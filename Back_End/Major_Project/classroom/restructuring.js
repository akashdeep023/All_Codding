const express = require("express");
const app = express();
const users = require("./routers/user.js")
const posts = require("./routers/post.js")

app.get("/",(req,res)=>{
    res.send("Hi,I am root!");
})
app.use("/users",users);    
app.use("/posts",posts);    //agar parent paramerters (/posts/:id) ho to id router me send nhi hota h issi liye router me {mergeParams: true} use karte h

app.listen(3000,()=>{
    console.log("server is listning on 3000");
})

// //Users----------                    //all router to move routers/user.js
// //index - users
// app.get("/users",(req,res)=>{
//     res.send("GET for users!");
// })
// //show - users
// app.get("/users/:id",(req,res)=>{
//     res.send("GET for show users!");
// })
// //post - users
// app.post("/users",(req,res)=>{
//     res.send("POST for user id!");
// })
// //delete - users
// app.delete("/users",(req,res)=>{
//     res.send("DELETE for user id!");
// })

// //Posts-----------                   //all router to move routers/post.js
// //index 
// app.get("/posts",(req,res)=>{
//     res.send("GET for posts!");
// })
// //show 
// app.get("/posts/:id",(req,res)=>{
//     res.send("GET for show users!");
// })
// //post 
// app.post("/posts",(req,res)=>{
//     res.send("POST for post id!");posts
// })
// //delete 
// app.delete("/posts",(req,res)=>{
//     res.send("DELETE for post id!");
// })
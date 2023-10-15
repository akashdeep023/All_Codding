//------------------------------------------What is REST in API---------------------------------------
//Representational State Transfer------REST- RESTful APIs-----------
//REST is an architectural style that difines a set of constraints to be used for creating web services.
//eg - twitter APi -> https://developer.twitter.com/en/docs/api-reference-index
//document - stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

//------------------------------------------CRUD Operations---------------------------------------
//CRUD - create, read, update, delete--------------------
//GET - retrieves resources. -> Read
//POST - submits new data to the server -> Create
//PUT - updates existing data -> Update
//PATCH - updates existing data partially -> Update exist
//DELETE - removes data -> Delete

//------------------------------------------Creating RESTful APIs---------------------------------------
//GET - /posts -> to get data for all posts - (index)main
//POST - /posts -> to add a new post - (create)
//GET - /posts/:id -> to get one post post(using id) - (view)
//PATCH/PUT - /posts/:id -> to update specific post - (update)
//DELETE - /posts/:id -> to delete specific post - (delete)Destroy

//create package.json -> npm init -y 
//install express -> npm i express
//install ejs -> npm i ejs
//create index.js -> touch index.js

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');
//uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const methodOverride = require('method-override');  
app.use(methodOverride('_method'));         // override with POST having ?_method=DELETE eg - <form method="POST" action="/resource?_method=DELETE">

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));   //req recive url formate
app.use(express.json());                        //req recive json formate

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

let posts=[
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "akashdeep",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "ashukumar",
        content: "I got selected for my 1st intership"
    },
];

// app.get("/",(req,res)=>{
//     res.send("serving working well!");
// })

//------------------------------------------Index Route---------------------------------------
//Implement: GET /posts - to get data for all posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

//------------------------------------------Create & New Route---------------------------------------
//Implement : POST /posts - to add a new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});     //add posts object
    // res.send("Post request working") //send -> string , object ,array etc
    // res.render("index.ejs",{posts}); //render -> ejs file
//------------------------------------------Redirect---------------------------------------
    res.redirect("/posts");             //redirect url in get request
});

//------------------------------------------Show Route---------------------------------------
//Implement : GET /posts/:id  - to get one post(using id)
//add id  to posts object (data base me id milti hai add nhi karni parti)
app.get("/posts/:id",(req,res)=>{
    let {id}= req.params;
    // console.log(id);
    let post = posts.find((p)=> id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs",{post});
});

//------------------------------------------Creating ids (UUID)---------------------------------------
//Create id for Posts
//UUID Package-----
//Universally unique identifier
//install UUID Package - npm install uuid
//require uuid - uper side line no 32,33
//add id to new post - line no 86

//------------------------------------------Update Route---------------------------------------
//Implement : PATCH  post/:id  - to update specific post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    // console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
});

//------------------------------------------Edit Route---------------------------------------
//create edit file-----
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);

    res.render("edit.ejs",{post});
});
//html se direct patch request nhi bhej sakte to -> method-override npm install karte hai
//install method-override - npm i method-override
//require method-override - line no 35,36

//------------------------------------------Destroy Route---------------------------------------
//Implement : DELETE  /posts/:id  - to delete specific post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    // console.log(posts);
    // res.send("delete request working");
    res.redirect("/posts");
    
})


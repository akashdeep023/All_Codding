//-----------------------------------------SERVER CREATE IN JAVASCRIPT------------------------------------------------
// ----------------------------------------Library v/s Framework------------------------------------------------------
// Library -> A library is a collection of pre-written code that can be used to perform specific tasts.
//     eg - axios  (use to response a promice)(In a task)

// Framework -> A framework is a set of pre-written code that provides a structure for developing software applications.
//     eg - express (use server side programming)(In a project)

// -------------------------------------------Express---------------------------------------------------------------
// A Node.js web application framework that helps us to make web applications
// It is usec for server side programming.
// Accept request to server(create a server) and send response
// 1. listen for incomming request  -> app.listen(port,()=>{console.log(`listening ${port}`)})
// 2. parse                         -> app.use((req,res)=>{console.log("request received");res.send("response");})
// 3. match response with routs     -> app.get("/",(req,res)=>{console.log("root path")})/apple ya /mango 
// 4. response send                 -> res.send("hello");
// Command----
// npm init - initialise Folder
// npm install express - install express
// touch index.js - create index file (server side)


//-----------------------------------------Getting started with Express----------------------------------------------
const express = require('express'); 
//express basicaly a function---
const app = express();  //this app(object) is help to creating server side app 
// console.log(app);

const port = 3000;  //8080 -> custome port to connect server

//run server side -> node file name
//app.listen method---
app.listen(port, () => {        //listen create a webserver (incomming api request ko listen karta hai)
  console.log(`app is listening on port ${port}`)
})
//server is run continious for listen. Stop serve enter command - ctrl+C
//Send request to server -> open website type localhost:3000 (show cannot Get / -> localhost to hai par sutable response nhi hai )

//-----------------------------------------Handling requests----------------------------------------------
//app.use method---
//app.use accept all request-------
// app.use((req,res)=>{
//   console.log("request received");    //send request to browser -> localhost:3000 and show request Ya copy browser url and send request to hoppscotch (install hoppscotch extention)
// })

//-----------------------------------------Sending a Response---------------------------------------------
//send http request (text bases request), Parssing -> Express text base request ko object me convert kar deta hai
// app.use((req,res)=>{
//   // console.log(req);              //print Object
//   console.log("request received");    
//   //send the HTTP response (multipal type - A Object, A String, A Boolean, or A Array)------
//   //type JavaScript Array, object -> Express responds with JSON formate-----
//   // res.send("This is a basic response"); 

//   //Express convert content-type -> Js Object to JSON formate
//   // res.send({              
//   //     name: "apple",                    
//   //     color: "red"
//   // }); 

//   //Express convert content-type ->html to text/html
//   let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li></ul>";
//   res.send(code);
// })

//-----------------------------------------Routing----------------------------------------------
//app.get method----      //main url ke /(slace) ke baad string ko route kahte hai eg- https://instagram.com/microsoft/  -> /(slace) ke baad microsoft route hai
//app.get accept get request------ 
//same path me one time send response and other-other path me many time send response  
//path not defined then send any route then response main path
//path define and send any other route then response Cannot Get /path name  
// app.get("/",(req,res)=>{
//   res.send("you contected root path /");    //http://localhost:3000 ya http://localhost:3000/ -> same path
// });
// app.get("/apple",(req,res)=>{
//   res.send("you contected apple path");  //http://localhost:3000/apple
// });
// app.get("/orange",(req,res)=>{
//   res.send("you contected orange path"); //http://localhost:3000/orange
// });
// //send other routs request and custome response -> path define "*" (upper path not match then send this response)
// app.get("*",(req,res)=>{
//   res.send("this path does not exist");
// });
// //app.post method-----
// // app.post accept post request------
// app.post("/",(req,res)=>{                         //http://localhost:3000 (hoppscotch send to post request)
//   res.send("you sent a post request to root");
// });

//----------------------------------------------Nodemon---------------------------------------------
//To automatically restart server with code changes--
// install global (kyo ki har baar nodemon ko install n karna pare)
// install nodemon with command -> npm install -g nodemon
// check version -> nodemon -v
// run file -> nodemon index.js       //work only git bash or cmd not powershell

//----------------------------------------------Path Parameters------------------------------------------
//Eg - instagram me to bahut ke user hai to kya sabhi ko difiend karte hai - nhi uske liye Path parameters ka use karte hai
//https://www.instagram.com/microsoft/ || https://www.instagram.com/apple/ || etc
app.get("/",(req,res)=>{
  res.send("hello, i am root");
});
// app.get("/:username",(req,res)=>{   //http://localhost:3000/akashdeep
//   console.log(req.params);
//   let {username} = req.params;
//   res.send(`hello, i am ${username}`);
// })
app.get("/:username/:id",(req,res)=>{   //http://localhost:3000/akashdeep/123
  console.log(req.params);    //parameters
  let {username, id} = req.params;
  // res.send(`hello, i am ${username} and id ${id}`);  //response one hi send ho sakta hai is liye comment kiye
  let code = `<h1>Welcome to the page of @${username}!</h1>`;
  res.send(code);
})

//----------------------------------------------Query String------------------------------------------
//https://www.google.com/search?q=apple     //q=apple ,mango, etc (Query string hai)
//https://www.npmjs.com/search?q=figlet     //q=figlet ,nodemon, etc (Query string hai)

app.get("/search",(req,res)=>{    // /search -> route hai
  console.log(req.query);         //req.query -> Query string hai
  let {q} = req.query;
  // res.send(`search result for query: ${q}`);                  //http://localhost:3000/search?q=mango
  if(!q){
    res.send("<h1>nothing searched</h1>");
  }
  res.send(`<h1>search result for query: ${q}</h1>`);      //http://localhost:3000/search?q=mango&color=yellow
});


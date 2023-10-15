const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const { connected } = require("process");
const {v4: uuidv4} =require("uuid");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'facebookDemo',
    password: '#@MySQL2324AD'
})

app.listen(8080,()=>{
    console.log("server is listining on port 8080");
})
app.get("/",(req,res)=>{
    res.send("Home root.")
})
app.get("/facebook/signup",(req,res)=>{
    res.render("signup.ejs")
})
app.post("/facebook/signup",(req,res)=>{
    let {username,fullname,email,password} = req.body;
    let id = uuidv4();
    // console.log(id);
    console.log(req.body);
    let q1 = `select username, email from user where username = '${username}' ;` //and email = '${email}'
    try{
        connection.query(q1,(err,result)=>{
            if(err) throw err;
            console.log(result);
            let userN ="";
            if(result.length == 0){
                userN = " ";
            }else{
                userN = `${result[0].username}`;
            }
            if(result.length == 1){
                if(username == userN){
                    console.log("allready exists")
                    // res.send("username allready exists!")
                }
            }
            if(true){
        let q3 = `select username, email from user where email = '${email}' ;` //and email = '${email}'
        connection.query(q3,(err,result)=>{
            if(err) throw err;
            console.log(result);
            let passW ="";
            if(result.length == 0){
                passW = " ";
            }else{
                passW = `${result[0].email}`;
            }
            if(result.length == 1){
                if(email == passW){
                    console.log("allready exists")
                    // res.send("email allready exists!")
                }
            }            
              else{
                let q2 = `insert into user values ('${id}','${username}','${fullname}','${email}','${password}');`              
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    res.redirect("/facebook/login");            
                });                
            }
        })
    }})
    
} 

    catch(err){        
        console.log(err);
        res.send("some error in DB")
    }
})
app.get("/facebook/login",(req,res)=>{
    res.render("login.ejs")
})
app.post("/facebook/login",(req,res)=>{
    let {email,password} = req.body;

    console.log(req.body);
    let q = `select email, password from user where email = '${email}' and password = '${password}';`
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result.length);
            if(result.length == 1){
                if(email == result[0].email || password == result[0].password){
                    console.log("page login")
                    res.redirect("/facebook");
                }
            }else{
                res.send("Email and Password is wrong");
            }
        })
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
})


app.get("/facebook",(req,res)=>{
    let q = 'show tables';
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.render("index.ejs");
        })
    }
    catch(err){
        console.log(err);
        res.send("some error in DB")
    }
})
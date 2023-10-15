//----------------------------------------------Using Faker------------------------------------
//npm init -y  -> create package.json
//to generate fack data----------
//install faker - npm i @faker-js/faker
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

//generate fack data ----------
// let getRandomUser =() => {
//   return {
//     // id: faker.datatype.uuid(),
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     // avatar: faker.image.avatar(),
//     // birthdate: faker.date.birthdate(),
//     // registeredAt: faker.date.past(),
//   };
// }
// console.log(getRandomUser());

// create the connection to database------------
const connection = mysql.createConnection({         
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '#@MySQL2324AD'
});

// let q = "SHOW TABLES";
// try{
//     connection.query(q,(err,result)=>{
//         if(err) throw err;
//         console.log(result);          //array
//         console.log(result.length);   //array length
//         console.log(result[0]);       //array object        
//     });
// }catch(err){
//     console.log(err);
// };
// connection.end();   //mysql connection end



//----------------------------------------------MySQL Package------------------------------------
//to connect Node with MySQL------------
//install package -> MySQl2  -> kyo ki MySQL old version hai
//install mysql2 -> npm i mysql2
//add path to envorment variable ->cd Program Files\MySQL\MySQL Server 8.0\bin
//use SQL -> mysql -u root -p -> enter -> enter password
//----------enter command----------
//mysql>show databases;
//use database_name;
//show tables;

//----------------------------------------------Using SQL from CLI------------------------------------
//use SQL method-------------------
//1) MySQL Workbench -> open application
//2) MySQL2 Package in nodejs -> install package and run
//3) In Command Prompt -> mysql -u root -p    ->exit
//4) Using schema.sql file ->source schema.sql    (in mysql command)

//----------------------------------------------CREATE Table user------------------------------------
//create table to help schema.sql file--------
//change schema.sql file then show all SQL ----

//----------------------------------------------INSERT INTO user------------------------------------
// using placeholders-----------? ke sthan pe user data jayega---
//Inserting new data ----------
// let q = "insert into user(id,username,email,password) values (?,?,?,?)";
// let user = ["123abc","random_user2","random123@gmail.com","123abc@"];
// try{
//   connection.query(q,user,(err,result)=>{
//       if(err) throw err;
//       console.log(result);          //array
//       // console.log(result.length);   //array length
//       // console.log(result[0]);       //array object        
//   });
// }catch(err){
//   console.log(err);
// };
// connection.end();   //mysql connection end

//Inserting multy new data------------
// let q = "insert into user(id,username,email,password) values ?";
// let users = [
//   ["123abcd","random_user2d","randomd123@gmail.com","123abcd@"],
//   ["123abce","random_user2e","randome123@gmail.com","123abcde@"]
// ];
// try{
//   connection.query(q,[users],(err,result)=>{
//       if(err) throw err;
//       console.log(result);            
//   });
// }catch(err){
//   console.log(err);
// };
// connection.end();  

//----------------------------------------------Insert in Bulk------------------------------------
//Inserting new data to help or feker------------
// let getRandomUser =() => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ]
// };

// let q = "insert into user(id,username,email,password) values ?";
// let data = [];
// for(let i=1; i<=100;i++){
//   // console.log(getRandomUser());
//   data.push(getRandomUser());   //100 fake user
// };
// try{
//   connection.query(q,[data],(err,result)=>{
//       if(err) throw err;
//       console.log(result);     
//   });
// }catch(err){
//   console.log(err);
// };
// connection.end(); 

//----------------------------------------------Routing------------------------------------
// install express -> npm i express   (server)
// install uuid -> npm i uuid         (rendom id)
// require express and uuid--------    
app.listen("8080",()=>{
  console.log("server is listening to port 8080");
});

//----------------------------------------------Home Route------------------------------------
app.get("/",(req,res) =>{                   //Home Route
  let q = " select count(*) from user ";
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result[0]["count(*)"]);
        let count = result[0]["count(*)"];
        // res.send("success"); 
        res.render("home.ejs",{count});            
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  };
  // res.send("welcome to home page");
});

//----------------------------------------------Add Template------------------------------------
//install ejs -> npm i ejs      (template file.ejs)
//require ejs - ejs by default express ke sath require hota hai
//require path-------
//app.set  (line no - 10,11)
//res.render(ejs file) in / get request


//----------------------------------------------Show Route------------------------------------
app.get("/user",(req,res)=>{              //Show route
  let q = `select * from user order by username`; //and -> order by username
  try{
    connection.query(q,(err,users)=>{
        if(err) throw err;
        // console.log(users);
        // res.send(users); 
        res.render("showuser.ejs",{users});            
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  };
})

//----------------------------------------------Edit Route------------------------------------
//install method-override -> npm i method-override
//require and app.use--(line no - 12,13,14)-------
app.get("/user/:id/edit",(req,res)=>{
  let {id}= req.params;
  console.log(id);
  let q = `select * from user where id='${id}'`;    //send id value in string
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;   
        console.log(result);  
        let user = result[0];  
        res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  };
});

//----------------------------------------------Update Route------------------------------------
//Update (DB) Route------------
app.patch("/user/:id",(req,res)=>{
  let {id}= req.params;
  // console.log(id);
  console.log(req.body);
  let q = `select * from user where id='${id}'`;    //send id value in string
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;   
      console.log(result[0].password);
      console.log(result[0].username);
      if((req.body.password != result[0].password)){  /* || (`'${req.body.username}'` == `'${result[0].username(---match all username-- error aaya tha ki same username se server crush ho jata -)}'`)*/
        res.send("Wrong password");        
      }else{   
        let q3 = `select * from user where username = '${req.body.username}'`;
        connection.query(q3, (err,result1)=>{
          if(err) throw err;
          console.log(result1);
          // let a = result[0];
          let userN = "";
          if(result1.length == 0){ //
            userN = " ";
          }else{
            userN = result1[0].username;
          }
          if(req.body.username === userN ){  //|| a != "undifined"  
            console.log(req.body.username); 
            console.log(result[0].username);
            res.send("Username is allready exist.")
          }else{
            let q2 = `update user set username = '${req.body.username}' where id = '${id}';`       
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");        
            });
          }
        })     
      }    
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  };
})

//---------------------------------------------------Home work---------------------------------------------------
//----------------Delete Route----------------------
app.get("/user/:id/delete",(req,res)=>{
  let {id}= req.params;
  console.log(id);
  let q = `select * from user where id='${id}'`;    //send id value in string
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;   
        console.log(result);  
        let user = result[0];  
        res.render("delete.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  };
});

//delete update------------------------------------------
app.delete("/user/:id",(req,res)=>{
  let {id} = req.params;
  console.log(id);
  console.log(req.body);
  let q = `select * from user where id = '${id}';`
  try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(req.body.password != result[0].password || req.body.email != result[0].email){
          res.send("Wrong Email and Password");
        }else{
          let q = `delete from user where id = '${id}';`
          connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log("delete account");
            // alert("something is wrong!");
            res.redirect("/");
          });
        }
      });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

//---------------------Add Route--------------------
app.get("/user/add",(req,res)=>{
  // let {id} = uuid();
  // console.log(id);
  let q = `select * from user`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      // res.send("add");
      res.render("add.ejs");
    })
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
})

//--------------------Add Update------------------
app.post("/user",(req,res)=>{
  let {username,email,password} = req.body;
  let id = uuidv4();
  let q = `insert into user values ('${id}','${username}','${email}','${password}')`
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log("add new user")
      console.log(result.log);
      res.redirect("/")      
    })
  }catch(err){
    console.log(err);
    res.send("some error in DB")
  }
})

















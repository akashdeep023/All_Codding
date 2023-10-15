//---------------------------------------Mongo(Mongoose)---------------------------------------
//----------------------------------------------------------------------------------------------
//--------------------------------------What is mongoose?-----------------------------------
//A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment
//It is an ODM (Object Data Modeling) library.

//--------------------------------------Installation & Setup-----------------------------------
//npm i mongoose    -> install mongoose
//https://mongoosejs.com    -> mongoose documentation
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');     //eg - http://localhost:8080/user       (asycronous function hai)
// seme code ------
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};
main()
  .then(()=>{
    console.log("connection successful");
  })
  .catch(err => console.log(err));

//--------------------------------------Schema-----------------------------------
// Schema defines the shape of the documents within that collection.
const userSchema = new mongoose.Schema({    //difine new schema in test database
  name: String,     //datatype start capital latter
  email: String,
  age: Number,
});

//--------------------------------------Models-----------------------------------
//Model in mongoose is a class with which we construct documents.
const User = mongoose.model("User",userSchema)    //Model and Collection name same(User) difine and run code then create collation(users) in test DB
// const Employee = mongoose.model("Employee",userSchema)  //same schema difine employee collection

//--------------------------------------Insert in Mongoose-----------------------------------
// const user1 = new User ({   //create user1 data but not insert in use collction
//   name:"Adam",              //check created data on node - node -> .load index.js -> user1 (print data with id)
//   email: "adam@yahoo.com",
//   age:22,
// });
// user1.save();     //save data on users collection (asycronous function hai) .then or .catch use kar sakte hai

// const user2 = new User ({   
//   name:"Eva",              
//   email: "eva@yahoo.com",
//   age:26,
// });
// user2.save()        //save() method asycronous then use .then or .catch method
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//--------------------------------------Insert Multiple-----------------------------------
// User.insertMany([                                 //insert data in users collection (insertMany - asycronous fnx )
//   {name: "Tony",email:"tony@gmail.com",age:35},
//   {name: "Peter",email:"peter@gmail.com",age:41},
//   {name: "Bruce",email:"bruce@gmail.com",age:25}
// ]).then((res)=>{
//   console.log(res);
// });

//--------------------------------------Find in Mongoose-----------------------------------
//mongoosejs.com/docs/api/model.html#Model.find()     -> read documentation  and other
// model.find()   -> returns a Query Object (thennable)
//Mongoose Queries are not promises. But they have a .then()
//find (return all users data)-----------
// User.find({})       
//   .then((res)=>{
//   console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
//find (return age > 30 users data)------------
// User.find({age:{$gt:30}})       
//   .then((res)=>{
//   console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
//findOne (return age>30 users data)-------------
// User.findOne({age:{$gt:30}})       
//   .then((res)=>{
//   console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// findOne (by id)-------------
// User.findOne({_id: "650c21faa5b842f3ee2546e7"})       
//   .then((res)=>{
//   console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// findById (id)-------------
// User.findById("650c21faa5b842f3ee2546e7")       
//   .then((res)=>{
//   console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//--------------------------------------Update in Mongoose-----------------------------------
//https://mongoosejs.com/docs/api/model.html#Model.updateOne()        (return - query  thannabale fnx)
//updateOne(filter , update) -----------------------
// User.updateOne({name:"Tony"},{age:40})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
//updateMany(filter , update) -----------------------
// User.updateMany({age:{$lte:25}},{age:30})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//--------------------------------------Find And Update-----------------------------------
//find and update (update and return)--------
//https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()        (return - query  thannabale fnx)
//findOneAndUpdate(filter,update)-------------------
// User.findOneAndUpdate({name:"Eva"},{age:32})
//   .then((res)=>{
//     console.log(res);     //update ke pahle ka data print hoga 
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//findOneAndUpdate(filter,update,option)-------------------(use option)
// User.findOneAndUpdate({name:"Eva"},{age:32},{new: true})     //option -> new: false (by default)
//   .then((res)=>{
//     console.log(res);     //option->{new:true} update ke pahle ka data print hoga 
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//findOneAndUpdate(filter,update)-------------------
// User.findByIdAndUpdate("650c1efff6fd91fa1502bf50",{age:50},{new: true})
//   .then((res)=>{
//     console.log(res);     //option {new: true} user karne pe update ke baad ka data print hoga 
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//--------------------------------------Delete in Mongoose-----------------------------------
//https://mongoosejs.com/docs/api/model.html#Model.deleteOne()              (return - query  thannabale fnx)
//deleteOne(condition)-----------
// User.deleteOne({name:"Bruce"})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//deleteMany(condition)-----------
// User.deleteMany({age: {$gt:40}})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//--------------------------------------Find And Delete-----------------------------------
//findOneAndDelete(condition)-----------
// User.findOneAndDelete({name:"Eva"},{})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//findByIdAndDelete(condition)-----------
// User.findByIdAndDelete("650c21faa5b842f3ee2546e7")
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//--------------------------------------Schema Validations-----------------------------------
// in books.js ------------

//--------------------------------------SchemaType Options-----------------------------------
// in books.js -----------

//--------------------------------------Validation in Updation & Errors-----------------------------------


  


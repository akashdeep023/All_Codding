//--------------------------------------Schema Validations-----------------------------------
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
};
main()
  .then(()=>{
    console.log("connection successful");
  })
  .catch(err => console.log(err));

//mongoosejs.com/docs/schematypes.html          -> read schema type and other-------------
// 1st method to define schema--------------single property
// const userSchema = new mongoose.Schema({   
//   name: String,   
//   email: String,
//   age: Number,
// });
// 2st method to define schema--------------multipal property
const bookSchema = new mongoose.Schema({        //Schem rules work on insertion not Updation(work on updation than send {runValidators: true})
  title:{
    type: String,
    required: true,           //required = not null
    maxLength: 20,            //string max length 20
  },
  author:{
    type: String,
  },
  price: {
    type: Number,
    // min: 1,                   //number min 1
    min: [1, "Price is too low for Amazon selling"],        // [value,show eror]
  },
  discount:{
    type: Number,
    default: 0,               //default value define
  },
  category:{
    type: String,
    enum: ["fiction","non-fiction"],    //only array value used 
  },
  genre:[String],                       //store array
});
const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//   title: "Mathematics XII", 
//   author:"RD Sharma",
//   price: 1200,
// })
// book1.save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// let book2 = new Book({
//   title: "Mathematics VIII",      //title agar n bheje to error aayega
//   author:"RD Sharma",
//   price: "1000",                  //price agar string me Alphabet bheje to error aayega "abc" (cast ya parsh error)
// })                                //price agar string me Number bheje to error nhi aayega "100" (no error)
// book2.save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//--------------------------------------SchemaType Options-----------------------------------
//mongoosejs.com/docs/schematypes.html#schematype-options         -> read schema type and other-------------
//add on bookSchema default value------------
// let book3 = new Book({
//   title: "Gone Girl", 
//   price: "399",
// })
// book3.save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// let book4 = new Book({
//   title: "Marvel Comics", 
//   price: 500,
//   category: "fiction"
// })
// book4.save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// let book5 = new Book({
//   title: "Marvel Comics v2", 
//   price: 600,
//   genre: ["comics","superheroes","fiction"]
// })
// book5.save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// Book.findByIdAndUpdate("65131d3ed161ec8cbe2e658f",{price:-500})     //price: -500 => schema price min 1 define but update value. not follow schema rule in updation 
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//send option in updation time--------

Book.findByIdAndUpdate("65131d3ed161ec8cbe2e658f",{price:-500},{runValidators:true})     //price: -500 => schema price min 1 define and send validators than not update value. follow schema rule in updation 
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    // console.log(err);
    console.log(err.errors.price.properties.message);   //print error message--------
  })



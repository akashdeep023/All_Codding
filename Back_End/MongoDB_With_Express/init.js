const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');    //Error chapter ka error handling---------
};

let allChats = [
    {   
        from: "jack",
        to: "jony",
        msg: "love you bro ",
        created_at: new Date()                 
    },
    {   
        from: "rohit",
        to: "mohit",
        msg: "send me your exam notes ",
        created_at: new Date()                 
    },
    {   
        from: "akash",
        to: "vikash",
        msg: "teach me JS callbacks ",
        created_at: new Date()                 
    },
    {   
        from: "amit",
        to: "sumit",
        msg: "all the best! ",
        created_at: new Date()                 
    },
    {   
        from: "tony",
        to: "peter",
        msg: "love you 3000 ",
        created_at: new Date()                 
    },
];
Chat.insertMany(allChats);

//run init.js than create all data-----------------
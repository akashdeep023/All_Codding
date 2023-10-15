const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
    .then(()=>{
        console.log("connectionnon successful")
    })
    .catch((err)=>{
        console.log(err)
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const userSchema = new Schema({
    username: String,
    addresses:[                 //mondo default create id to every object---
        {
            _id: false,         //agar by default id nhi chahiye to---
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model("User",userSchema);

// const addUsers = async()=>{
//     let user1 = new User({
//         username: "jack",
//         addresses:[
//             {                
//                 location: "221B Baker Street",
//                 city: "London",
//             }
//         ]
//     })
//     user1.addresses.push({location: "P32 WallStreet", city: "London"});
//     let result = await user1.save();
//     console.log(result);
// }

// addUsers();

//
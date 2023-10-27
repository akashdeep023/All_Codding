const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});               //delete all data
    initData.data = initData.data.map((obj)=>({ //add owner
        ...obj,
        owner: "65326f898945d63e510e2655"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
}
initDB();

//cd init
//node index.js
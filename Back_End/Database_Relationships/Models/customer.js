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
//define order schema----------
const orderSchema = new Schema({
    item: String,
    price: Number,
})

//define customer schema----------
const customerSchema = new Schema({
    name: String,
    orders:[                        //https://mongoosejs.com/docs/populate.html
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});

//-------------------Mongoose Middlewares----------------------------
//pre middleware-------
// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MIDDLEWARE")
// })
//post middleware-------
customerSchema.post("findOneAndDelete",async(customer)=>{
    // console.log("POST MIDDLEWARE")
    if(customer.orders.length){
        let res = await Order.deleteMany({_id:{$in: customer.orders}});
        console.log(res);
    }
})

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addOrders = async()=>{
    let res = await Order.insertMany([
        {item: "Somasa", price: 12},
        {item: "Chips", price: 10},
        {item: "Chocolate", price: 40},
    ])
    console.log(res);
}
// addOrders();

const addCustomer = async()=>{
    let cust1 = new Customer({
        name: "Rahul kumar",
    })
    
    let order1 = await Order.findOne({item:"Chips"});       //find object
    let order2 = await Order.findOne({item:"Chocolate"});   //find object

    cust1.orders.push(order1);      //push order1 object in mongoose but show only id in MongoDB 
    cust1.orders.push(order2);      //show only object only terminal save time

    let res = await cust1.save();
    console.log(res);                    //print all data but store only id

}
// addCustomer();


//using populate ----------use to show all object infomation--------------
//verify what is store in DB--------
const findCustomer = async()=>{
    // let result = await Customer.find({});   //check how to store----
    // console.log(result);                    //store only id 
    let result = await Customer.find().populate("orders");
    console.log(result[0]);
}
// findCustomer();

//----------------------------------Project-Phase 2 (Part a)------------------------------------------
//----------------------------------Handling Deletion------------------------------------------

const addCust = async()=>{
    let newCust = new Customer({
        name: "Karan Arjun"
    })
    let newOrder = new Order({
        item: "Burger",
        price: 200
    })
    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();
    console.log("added new customer");
}
// addCust();

//-------------------------------------------------------
//https://mongoosejs.com/docs/middleware.html       -read documentation

const delCust = async()=>{                          //add post mongoose middleware----
    let data = await Customer.findByIdAndDelete("6526e1a954b968223181bc65");    //delete customer.orders ---------
    console.log(data);
}
delCust();
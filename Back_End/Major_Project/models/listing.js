const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {                    //image download in unsplash.com
    //     type: String,           //turnory operator same if else operator
    //     default: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    //     set: (v)=> v === "" 
    //     ? "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
    //     : v,                
    // },
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    categery: {
        type: [Number],
    } 

})

//Handling Delete Listing-----------------------------
//post middleware to delete all reviews in listing---------
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
})


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = Schema({
    email:{
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName:{
        type: String,
        required: true
    },
    image: {
		url: String,
		filename: String,
	},
    //username and password Schema create passport-local-mongoose
})

userSchema.plugin(passportLocalMongoose); //add hashing, salting, and more fnx and methods

module.exports = mongoose.model('User', userSchema);
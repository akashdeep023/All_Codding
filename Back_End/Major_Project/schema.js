//Validation for Schema (Hoppscotch)------------------------------------------
//joi packages------------------------
//The most powerful schema description language and data validator for JavaScript.
//https://joi.dev/api/?v=17.9.1
//install -> npm i joi
const Joi = require ("joi");

//listings validation-------
module.exports.listingSchema = Joi.object({
	listing: Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),
		country: Joi.string().required(),
		location: Joi.string().required(),
		price: Joi.number().required().min(0),
		image: Joi.string().allow("", null),
		category: Joi.allow(""),
	}).required(),
});

//review validation-------
module.exports.reviewSchema = Joi.object({
	review: Joi.object({
		rating: Joi.number().required().min(1).max(5),
		comment: Joi.string().required(),
	}).required(),
});

//user validation-------
module.exports.userSchema = Joi.object({
    fName: Joi.string().required().trim(),
    lName: Joi.string().required().trim(),
    username: Joi.string().required(),
	email: Joi.string().required().email(),
    password: Joi.string().min(8),
});








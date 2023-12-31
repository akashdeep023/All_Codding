const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

//listings validation-----
module.exports.validateListing = (req, res, next) => {
	// console.log(req)
	console.log(req.body);
	let { error } = listingSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((el) => el.message).join(",");
		console.log(error);
		console.log(errMsg);
		console.log("error listing ------");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};
//reviews validation----
module.exports.validateReview = (req, res, next) => {
	let { error } = reviewSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((el) => el.message).join(",");
		console.log(error);
		console.log(errMsg);
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

//connecting Login route ----------------
module.exports.isLoggedIn = (req, res, next) => {
	// console.log(req);       //all info store req
	// console.log(req.path,"||",req.originalUrl)  //jis path se login page pe aaye h
	if (!req.isAuthenticated()) {
		//check user login
		req.session.redirectUrl = req.originalUrl;
		req.flash("error", "You must be logged in.");
		return res.redirect("/login");
	}
	next();
};

//saveredirectUrl-------------
module.exports.saveRedirectUrl = (req, res, next) => {
	if (req.session.redirectUrl) {
		res.locals.redirectUrl = req.session.redirectUrl;
		// console.log(res.locals.redirectUrl);
	}
	next();
};

//Authorization for listings
module.exports.isOwner = async (req, res, next) => {
	try {
		let { id } = req.params;
		let listing = await Listing.findById(id);
		if (!listing.owner.equals(res.locals.currUser._id)) {
			req.flash("error", "You are not the owner of this listing");
			return res.redirect(`/listings/${id}`);
		}
		next();
		//try and catch create bye me ------ to
	} catch (err) {
		next(new ExpressError(400, "This Listing Page is not valid..."));
	}
};

module.exports.isOwnerAll = async (req, res, next) => {
	try {
		let { id } = req.params;
		console.log(id);
		let listing = await Listing.findOne({ owner: id });
		console.log(listing);
		if (!listing) {
			req.flash("error", "You don't have any listings...");
			return res.redirect(`/profile`);
		}
		if (!listing.owner.equals(res.locals.currUser._id)) {
			req.flash("error", "You are not the owner of this listing...");
			return res.redirect(`/listings`);
		}
		next();
	} catch (err) {
		next(new ExpressError(400, "This Listing Page is not valid..."));
	}
};

// Authorization for reviews
module.exports.isReviewAuthor = async (req, res, next) => {
	try {
		let { id, reviewId } = req.params;
		let review = await Review.findById(reviewId);
		if (!review.author.equals(res.locals.currUser._id)) {
			req.flash("error", "You are not the author of this review");
			return res.redirect(`/listings/${id}`);
		}
		next();
	} catch {
		next(new ExpressError(400, "This Review Page is not valid..."));
	}
};
//check ------------------ === operator to review
// module.exports.isReviewAuthor = async (req,res,next)=>{
//     let {id,reviewId} = req.params;
//     let review = await Review.findById(reviewId);
//     if(!(`${review.author}`===`${res.locals.currUser._id}`)){
//         req.flash("error","You are not the author of this review");
//         return res.redirect(`/listings/${id}`);
//     }
//     next();
// }

module.exports.isReviewAuthorProfile = async (req, res, next) => {
	try {
		let { id, reviewId } = req.params;
		let review = await Review.findById(reviewId);
		if (!review.author.equals(res.locals.currUser._id)) {
			req.flash("error", "You are not the author of this review");
			return res.redirect(`/listings`);
		}
		next();
	} catch {
		next(new ExpressError(400, "This Review Page is not valid..."));
	}
};

module.exports.isReviewAll = async (req, res, next) => {
	try {
		let { id } = req.params;
		let review = await Review.findOne({ author: id });
		if (!review) {
			req.flash("error", "You don't have any reviews...");
			return res.redirect(`/profile`);
		}
		if (!review.author.equals(res.locals.currUser._id)) {
			req.flash("error", "You are not the author of this review...");
			return res.redirect(`/listings`);
		}
		next();
	} catch {
		next(new ExpressError(400, "This Review Page is not valid..."));
	}
};

// Middleware to save the current URL in the session
// module.exports.currUrl = (req, res, next) => {
//     req.session.currUrl = req.originalUrl;
//     next();
// };

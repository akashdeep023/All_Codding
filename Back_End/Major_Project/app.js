//----------------------------------------------Basic Set up----------------------------------------------
if(process.env.NODE_ENV != "production"){       //this is use only production face not
    require('dotenv').config();     //require env   || dotenv package in npm
    // console.log(process.env);
    // console.log(process.env.SECRET);
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js")              //require Listing model
const path = require("path");                               //
const methodOverride = require("method-override");          //use put, patch, delete route
const ejsMate = require("ejs-mate");                        //layout ejs
// const wrapAsync = require("./utils/wrapAsync.js")           //Error handling
const ExpressError = require("./utils/ExpressError.js")     //Custome error handling
// const {listingSchema,reviewSchema} = require("./schema.js") //require joi listing/review schema (server error)
// const Review = require("./models/review.js");               //require Review model

const listingRouter = require("./routers/listing.js")        //resturcturing listing route
const reviewRouter = require("./routers/review.js")          //resturcturing revies route
const userRouter = require("./routers/user.js")          //resturcturing revies route
const profileRouter = require("./routers/profile.js"); //resturcturing profile route

const session = require("express-session");             //require express-session to help storege data on temprory
const MongoStore = require("connect-mongo")     //---  use to session store
const flash = require("connect-flash")


//Authentication and Authorization (login & signup)-------------------------
//https://www.passportjs.org/packages/
//https://www.npmjs.com/package/passport   -------  read documentation
//npm i passport , npm i passport-local , npm i passport-local-mongoose
//user.js file -----------
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";
const DB_URL = process.env.ATLASDB_URL;//---
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  //   await mongoose.connect(MONGO_URL);
  await mongoose.connect(DB_URL);//---
}

app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public/")));

const store = MongoStore.create({//---
    mongoUrl: DB_URL,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600
})
store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE")
})

const sessionOptions = {
    store, //---
    secret: process.env.SECRET,//---
    resave: false,
    saveUninitialized: true,
    cookie:{                                            //set custome cookie
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,  //add expiry date
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};
app.use(session(sessionOptions))
app.use(flash());

//Authentication and Authorization----------
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));   // use static authenticate method of model in LocalStrategy----

passport.serializeUser(User.serializeUser());           // use static serialize and deserialize of model for passport session support----
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success")   //success send to flash.ejs
    res.locals.error = req.flash("error")
    res.locals.currUser = req.user;
    console.log("<<========================START========================>>")
    console.log(`rawheaders:- ${req.get('rawHeaders')}`)
    console.log(`rawheaders:- ${req.rawHeaders.slice(";").join("     ")}`)
    console.log(`Country name:- ${req.get('cf-ipcountry')}`)
    console.log(`Referar name:- ${req.get('referer')}`)
    console.log(`Use site name:- ${req.get('sec-ch-ua')}`)
    console.log(`Mobile name:- ${req.get('sec-ch-ua-mobile')}`)
    console.log(`Platform name:- ${req.get('sec-ch-ua-platform')}`)
    console.log(`Client IP address is:- ${req.get('true-client-ip')}`)
    console.log(`Connecting IP address is:- ${req.get('cf-connecting-ip')}`)
    console.log(`Forwarded IP address is:- ${req.get('x-forwarded-for')}`)
    console.log(`User detail:- ${res.locals.currUser}`)
    console.log("<<========================END========================>>")
    next();
});

// app.get("/",(req,res)=>{
//     res.send("Hi, I am root");
// })

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student"
//     });
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// })

app.use("/", userRouter);

app.use("/profile", profileRouter); // Restructuring Profile Router create me.

// //listings validation-----
// const validateListing = (req,res,next)=>{
//     let {error} = listingSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         console.log(error);
//         console.log(errMsg);
//         throw new ExpressError ( 400, errMsg);
//     }else{
//         next();
//     }
// }
// //reviews validation----
// const validateReview = (req,res,next)=>{
//     let {error} = reviewSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         console.log(error);
//         console.log(errMsg);
//         throw new ExpressError(400,errMsg)
//     }else{
//         next();
//     }
// }

//----------------------------------------------Listing Model----------------------------------------------
//create Listing model in -> model/listing.js--------

//testListiing route - to check route-------
// app.get("/testListing",async (req,res)=>{
//     let smapleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calagute, Goa",
//         country: "India",
//     });
//     await smapleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing")
// })

//----------------------------------------------Initialize Database----------------------------------------------
//create init folder-------------
//all data in data.js file----------
//create index.js file ----------
//check index.js file------------


//-------------------------------------------------Restructuring Listing Router----------------------------------------------------------------
app.use("/listings",listingRouter)
// //----------------------------------------------Index Route----------------------------------------------
// app.get("/listings",wrapAsync(async(req,res,next)=>{
//     let allListing = await Listing.find();
//     // console.log(allListing);
//     res.render("listings/index.ejs",{allListing});
// }));

// //READ show route CREATE new route ke niche h-----------

// //----------------------------------------------CREATE (New & Create Route)----------------------------------------------
// //new /listings/new route ko /listings/:id ke uper rakhege nhi to express /lintings/new ko id samjta h
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// })

// app.post("/listings",validateListing,wrapAsync( async(req,res,next)=>{                                     //add next to call next meddleware
//     //1st method ---------- listings/new.ejs me name simple(title) define h
//     // let {title,description,image,price,location,country} = req.body;
//     // let newListing = new Listing({
//     //     title: title,
//     //     description: description,
//     //     image: image,
//     //     price: price,
//     //     location: location,
//     //     country: country
//     // })
//     // console.log(newListing);
//     // await newListing.save();
//     // res.send("new route work");

//     //2nd method ------------ listings/new.ejs me name opject form me difine h name ko object ki key define karte h
//     // console.log(req.body.listing);

//     // if(!req.body.listing){
//     //     throw new ExpressError(400,"Send valid data for listing")
//     // }
//     // let newListing = new Listing(req.body.listing);     //listing object h
//     // //-----------------------------Validation for Schema (Hoppscotch)------------------------------------------
//     // if(!newListing.title){                                       //hoppscotch -> body -> application/x-www-from-urlencoded  -> listing[title]  - Home
//     //     throw new ExpressError(400,"Title is missing")
//     // }
//     // if(!newListing.description){
//     //     throw new ExpressError(400,"Description is missing")
//     // }
//     // if(!newListing.location){
//     //     throw new ExpressError(400,"Location is missing")
//     // }
//     // // console.log(newListing);
//     // await newListing.save();
//     // res.redirect("/listings");

//     //joi packages------------------------------------------------------------------------
//     //The most powerful schema description language and data validator for JavaScript.
//     //install -> npm i joi          ||  require

//     // const result = listingSchema.validate(req.body);
//     // console.log(result);
//     // if(result.error){
//     //     throw new ExpressError(400,result.error);
//     // }

//     const newListing = new Listing(req.body.listing);       //add validateListing fnx
//     await newListing.save();
//     res.redirect("/listings");

//     })
// );
// //----------------------------------------------READ (Show Route)----------------------------------------------
// app.get("/listings/:id",wrapAsync(async(req,res,next)=>{
//     let {id} = req.params;                      //use urlencoded app.set-----
//     let listing = await Listing.findById(id).populate("reviews");
//     if(!listing){
//         // next(new ExpressError(400,"Listing not found"))
//         throw new ExpressError(400,"Listing not found")
//     }
//     console.log(listing);
//     res.render("listings/show.ejs",{listing});
// }));

// //----------------------------------------------UPDATE (Edit & Update Route)----------------------------------------------
// app.get("/listings/:id/edit",wrapAsync(async(req,res,next)=>{
//     let {id} = req.params;
//     let listing = await Listing.findById(id);
//     res.render("listings/edit.ejs",{listing});
// }));

// app.put("/listings/:id",validateListing,wrapAsync(async(req,res,next)=>{
//     let {id} = req.params;
//     // if(!req.body.listing){                       //add validateListing fnx
//     //     throw new ExpressError(400,"Send valid data for listing")
//     // }
//     let updateListing = req.body.listing;
//     // console.log(updateListing);
//     // console.log({...updateListing});
//     await Listing.findByIdAndUpdate(id,updateListing);
//     res.redirect(`/listings/${id}`)
// }));

// //----------------------------------------------DELETE (Delete Route)----------------------------------------------
// app.delete("/listings/:id",wrapAsync(async(req,res,next)=>{
//     let {id} = req.params;
//     let deleteListing =await Listing.findByIdAndDelete(id);
//     console.log(deleteListing);
//     console.log("delete")
//     res.redirect("/listings");
// }));



//-------------------------------------------------Restructuring Review Router----------------------------------------------------------------
app.use("/listings/:id/reviews",reviewRouter)
// //------------------------------------------------Create Reviews Route--------------------------------------------
// app.post("/listings/:id/reviews",validateReview,wrapAsync(async(req,res,next)=>{
//     let listing = await Listing.findById(req.params.id);
//     console.log(listing)
//     let newReview = new Review(req.body.review);
//     console.log(newReview);
//     listing.reviews.push(newReview);
//     await newReview.save();
//     await listing.save();       //save exits data
//     console.log("new review saved")
//     res.redirect(`/listings/${req.params.id}`)
// }));

// //------------------------------------------------Delete Reviews Route--------------------------------------------
// app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res,next)=>{
//     let {id,reviewId} = req.params;
//     await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});  //pull -> remove (review delete by id in listing)
//     await Review.findByIdAndDelete(reviewId);                           //review delete
//     res.redirect(`/listings/${id}`);
// }))



//all other route req ---------
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"));
})

//error handling midlleware---------
app.use((err,req,res,next)=>{
    // res.send("something went wrong");
    let {statusCode =500 , message = "Something went wrong!"} = err;
    // res.status(statusCode).send(message);
    // create error.ejs file --------
    res.status(statusCode).render("listings/error.ejs",{message})

});

//------------------------------------------------------Part-B----------------------------------------------------
//----------------------------------------------Creating Boilerplate----------------------------------------------
//install ejs-mate -> npm i ejs-mate ------ require and app.engine
//https://npm.js.com/package/ejs-mate   --------
//create layouts folder and inside boilerplate.js file --------- basic html (boilerplate)
//create public folder and inside css folder inside style.css file ------ require and app.use
//link in boilerplate.ejs file

//----------------------------------------------Navbar----------------------------------------------
//create includes folder in views folder-----
//create navbar.ejs file in includes folder-------
//include in boilerplate.ejs file----

//----------------------------------------------Footer----------------------------------------------
//create footer.ejs file in includes folder-------
//include in boilerplate.ejs file----

//----------------------------------------------Styling Index----------------------------------------------
//style index file----------

//----------------------------------------------Styling New Listing----------------------------------------------
//style new file----------

//----------------------------------------------Styling Edit Listing----------------------------------------------
//style edit file----------

//----------------------------------------------Styling Show Listing----------------------------------------------
//style show  file-----------
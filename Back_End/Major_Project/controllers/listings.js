const Listing = require("../models/listing")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');  //install package - npm install @mapbox/mapbox-sdk
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken: mapToken});


//export------------------routers/listing.js----------------

module.exports.index = async(req,res,next)=>{
    let allListing = await Listing.find();
    // console.log(allListing);
   res.render("listings/index.ejs",{allListing});
    
}

module.exports.renderNewForm = (req,res)=>{
    // console.log(req.user);
    // if(!req.isAuthenticated()){     //check user login
    //     req.flash("error","You must be logged in to create listing");
    //     res.redirect("/login")
    // }
        res.render("listings/new.ejs");
}

module.exports.createListing =  async(req,res,next)=>{                                     //add next to call next meddleware
    //1st method ---------- listings/new.ejs me name simple(title) define h
    // let {title,description,image,price,location,country} = req.body;
    // let newListing = new Listing({
    //     title: title,
    //     description: description,
    //     image: image,
    //     price: price,
    //     location: location,
    //     country: country
    // })
    // console.log(newListing);
    // await newListing.save();
    // res.send("new route work");

    //2nd method ------------ listings/new.ejs me name opject form me difine h name ko object ki key define karte h
    // console.log(req.body.listing);

    // if(!req.body.listing){
    //     throw new ExpressError(400,"Send valid data for listing")
    // }
    // let newListing = new Listing(req.body.listing);     //listing object h
    // //-----------------------------Validation for Schema (Hoppscotch)------------------------------------------
    // if(!newListing.title){                                       //hoppscotch -> body -> application/x-www-from-urlencoded  -> listing[title]  - Home
    //     throw new ExpressError(400,"Title is missing")
    // }
    // if(!newListing.description){
    //     throw new ExpressError(400,"Description is missing")
    // }
    // if(!newListing.location){
    //     throw new ExpressError(400,"Location is missing")
    // }
    // // console.log(newListing);
    // await newListing.save();
    // res.redirect("/listings"); 

    //joi packages------------------------------------------------------------------------
    //The most powerful schema description language and data validator for JavaScript.
    //install -> npm i joi          ||  require

    // const result = listingSchema.validate(req.body);     
    // console.log(result);
    // if(result.error){
    //     throw new ExpressError(400,result.error);
    // }
    // console.log(req.body)
    //use geocoding----------geometry object add in listing
    let response = await geocodingClient.forwardGeocode({
        query: `${req.body.listing.location},${req.body.listing.country}`,
        limit: 1
    }).send()
    // console.log(response.body.features[0].geometry)     //geo JSON fromate data-----
    // res.send("done!") 

    //coloudinary----------
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, " " , filename)
    const newListing = new Listing(req.body.listing);           //add validateListing fnx
    newListing.owner = req.user._id;
    newListing.image = {url,filename};                          //save image - url and filename in mongoose
    newListing.geometry = response.body.features[0].geometry;   //save geometry - type and coordinates in mongoose
    await newListing.save();
    req.flash("success","New Listing Created!")
    res.redirect("/listings");
}

module.exports.showListing = async(req,res,next)=>{
    let {id} = req.params;                      //use urlencoded app.set-----
    let listing = await Listing.findById(id).populate({path:"reviews",populate:{path: "author"}}).populate("owner");
    
    if(!listing){
        // next(new ExpressError(400,"Listing not found"))
        // throw new ExpressError(400,"Listing not found")
        req.flash("error","Listing you requested for does not exist!")
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
}

module.exports.renderEditForm = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload","/upload/w_200,h_150")
    if(!listing){
        req.flash("error","Listing you requested for does not exist!")
        res.redirect("/listings")
    }
    res.render("listings/edit.ejs",{listing , originalImage});
}

module.exports.updateListing = async(req,res,next)=>{
    let {id} = req.params;
    //add validateListing fnx-----------------middleware
    // if(!req.body.listing){                       
    //     throw new ExpressError(400,"Send valid data for listing")
    // }
    //Authorization listings--------------------middleware
    // let listing = await Listing.findById(id);
    // if(!listing.owner.equals(res.locals.currUser._id)){             
    //     req.flash("error","You don't have parmissions to edit");
    //     return res.redirect(`/listings/${id}`);
    // }
    //use geocoding----------geometry object add in listing
    let response = await geocodingClient.forwardGeocode({
        query: `${req.body.listing.location},${req.body.listing.country}`,
        limit: 1
    }).send()
    let updateListing = req.body.listing;  
    // console.log(updateListing);
    // console.log({...updateListing});  
    let listing = await Listing.findByIdAndUpdate(id,updateListing);

    listing.geometry = response.body.features[0].geometry;   //save geometry - type and coordinates in mongoose
    await listing.save();

    if(typeof req.file != "undefined"){     //update image----
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","Listing Updated!")
    res.redirect(`/listings/${id}`)
}

module.exports.destroyListing = async(req,res,next)=>{
    let {id} = req.params;
    let deleteListing =await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("error","Listing Deleted!")
    console.log("delete")
    res.redirect("/listings");
}
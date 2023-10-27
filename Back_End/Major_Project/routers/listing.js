const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js")
const {validateListing , isLoggedIn , isOwner} = require("../middleware.js")

const listingController = require("../controllers/listings.js")                             //all backend code--------

const multer  = require('multer')            //install multer package in npm || multipart/form-data type receive and paras 
// const upload = multer({ dest: 'uploads/' })  //uploads folder me save karega
const {storage} = require("../cloudConfig.js")
const upload = multer({storage});

// Router.route-----------------------
router.route("/")
    .get(wrapAsync(listingController.index))                                                //Index Route----------
    .post(isLoggedIn,upload.single('listing[image]'),wrapAsync(listingController.createListing));           //CREATE (New & Create Route)-----------
    // .post(upload.single('listing[image]'),(req,res)=>{
    //     // res.send(req.body);
    //     res.send(req.file);
    // })

    //validateListing,
router.get("/new",isLoggedIn,listingController.renderNewForm);                              //CREATE (New & Create Route)-----------

router.route("/:id")
    .get(wrapAsync(listingController.showListing))                                          //READ (Show Route)------------
    .put(isLoggedIn,isOwner,upload.single('listing[image]'),wrapAsync(listingController.updateListing))     //UPDATE (Edit & Update Route)-----------------
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))                 //DELETE (Delete Route)-----------

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));     //UPDATE (Edit & Update Route)-----------------

module.exports = router;        //export---app.js---------------
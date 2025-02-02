const express = require("express");
const router = express.Router();        //rename name app to router

//Users----------
//index - users
router.get("/",(req,res)=>{         //yaha pe direct / likhege to /users pe hi jayega
    res.send("GET for users!");
})
//show - users
router.get("/:id",(req,res)=>{
    res.send("GET for show users!");
})
//post - users
router.post("/",(req,res)=>{
    res.send("POST for user id!");
})
//delete - uroutersers
router.delete("/:id",(req,res)=>{
    res.send("DELETE for user id!");
})

module.exports = router;
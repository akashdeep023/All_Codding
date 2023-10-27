const User = require("../models/user");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup")
}

module.exports.signUser = async(req,res,next)=>{
    try{
        let {username,email,password} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{       //login after signup
            if(err){
                return next(err);
            }
            req.flash("success","User was registered and Login");
            res.redirect("/listings")
        })
    }catch(e){
        req.flash("error",e.message)
        res.redirect("/signup")
    }
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login")
}

module.exports.loginUser = async(req,res,next)=>{
    req.flash("success","Welcome back to Wanderlust! ")
    let redirectUrl = res.locals.redirectUrl || "/listings";    //res.locals.redirectUrl empty h to /listings pe redirect hoga
    res.redirect(redirectUrl)
}

module.exports.logoutUser = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings")
    })
}
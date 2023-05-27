const path = require('path')
const {userData} = require('./../modules/user.data');

// registration section .....
exports.userRTS = (req,res)=>{
    const {name,email,Password} = req.body;
    const user = {
     name,email,Password
    };
userData.push(user);
   res.redirect("/");
};
exports.userredirect = (req,res)=>{
    res.status(201).json({
        message:"user create susccess",
        userData
    });
};

// user login section..
exports.userLogin = (req,res)=>{
    const {email,Password} = req.body;
    const emaill = userData[0].email;
    const pass = userData[0].password;
    if(email == emaill && Password == pass){
        res.redirect("/api/v1/home");
    }
    else{
        res.json({
            message:"email/password is worng....."
        });
    }
};

// home section...
exports.home = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/publick/home.html"))
};

// about section...
exports.about = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/publick/about.html"))
};

// service section...
exports.service = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/publick/service.html"))
};

// contact section...
exports.contact = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/publick/contact.html"))
};

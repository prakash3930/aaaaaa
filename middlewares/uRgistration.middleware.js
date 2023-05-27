const joi = require('joi');
exports.registrationMIddleware = (req,res,next)=>{
    // joi object....
    const schema = joi.object({
        name:joi.string().required().min(3).max(30),
        email:joi.string().required().email().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Password:joi.string().min(6).max(15).required().pattern(new RegExp('^[a-zA-Z0-9]{6,15}$'))
    });

    const {error}  = schema.validate(req.body);

    if(error){
        const errorList = error.details.map((err)=>err.message);
        res.json({
            message:"invalid input",
            error: errorList
        })
    }
    else{
        next();
    }
};

// login middleware..........
exports.loginMIddleware = (req,res,next)=>{
    // joi object....
    const schema = joi.object({
        email:joi.string().required().email().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Password:joi.string().min(6).max(15).required().pattern(new RegExp('^[a-zA-Z0-9]{6,15}$'))
    });

    const {error}  = schema.validate(req.body);

    if(error){
        const errorList = error.details.map((err)=>err.message);
        res.json({
            message:"invalid input",
            error: errorList
        })
    }
    else{
        next();
    }
};
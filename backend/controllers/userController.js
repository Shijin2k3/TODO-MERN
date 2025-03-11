const User=require("../models/userModel");
const bcrypt=require('bcryptjs')

//register user 
exports.registerUser=async(req,res,next)=>{
   try{
    const {email,username,password}=req.body;
    const hashPassword=bcrypt.hashSync(password)
    const user=await User.create({email,username,password:hashPassword});
     return res.status(200).json({
        success:true,
        message:"user Sign up successfully",
        user
    })
   }catch(err){
    return res.status(400).json({
        success:false,
        message:"user already exist",
        error:err.message
    })

   }
}

//login user
exports.loginUser=async(req,res,next) => {
    try{
        const user= await User.findOne({email:req.body.email});
        if(!user){
           return res.status(400).json({
                success:false,
                message:"Please Register first"
            })
        }
        const isPasswordCorrect= bcrypt.compareSync(req.body.password,user.password);
       if(!isPasswordCorrect){
           return res.status(401).json({
                success:false,
                message:"Incorrect Password"
            })
        }
        const {password,...others}=user._doc;
         return res.status(200).json({
            success:true,
            message:"Your Login Was Successfull",
            user:others
        })

    }catch(err){
       return res.status(500).json({
            success:false,
            message: "Internal server error",

            error:err.message
        }) 
    }
}
const User=require("../models/userModel");
const bcrypt=require('bcryptjs')

//register user 
exports.registerUser=async(req,res,next)=>{
   try{
    const {email,username,password}=req.body;
    const hashPassword=bcrypt.hashSync(password)
    const user=await User.create({email,username,password:hashPassword});
    res.status(200).json({
        success:true,
        user
    })
   }catch(err){
    res.status(400).json({
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
            res.status(400).json({
                success:false,
                message:"Please Register first"
            })
        }
        const isPasswordCorrect= bcrypt.compareSync(req.body.password,user.password);
       if(!isPasswordCorrect){
            res.status(400).json({
                success:false,
                message:"Incorrect Password"
            })
        }
        const {password,...others}=user._doc;
        res.status(200).json({
            success:true,
            others
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error:err.message
        }) 
    }
}
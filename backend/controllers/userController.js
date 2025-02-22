const User=require("../models/userModel");


exports.registerUser=async(req,res,next)=>{
   try{
    const {email,username,password}=req.body;
    const user=await User.create({email,username,password});
    res.status(200).json({
        success:true,
        user
    })
   }catch(err){
    console.log(err)
    res.status(400).json({
        success:false,
        message:"user already exist",
        error:err.message
    })

   }
}
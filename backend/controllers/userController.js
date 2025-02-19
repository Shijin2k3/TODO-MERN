import User from "../models/userModel";

export const registerUser=async(req,res,next)=>{
    const {email,username,password}=req.body;
    const user=await User.create({email,username,password});
}
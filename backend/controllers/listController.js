const List=require('../models/listModel');
const User = require('../models/userModel');

exports.addTask=async(req,res,next) => {
    try{
    const {title,description,email}= req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        const list=await new  List({title,description,user:existingUser._id});
        if (!existingUser.list) {
            existingUser.list = []; 
        }

        existingUser.list.push(list);
        await list.save();
        await existingUser.save();
        res.status(200).json({
            success:true,
            list
        })


    }
    else {
        res.status(404).json({
            success: false,
            message: 'User  not found'
        });
    }
 }catch(err){
    console.log(err)
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
 }
}
// update task
exports.updateTask=async(req,res,next) => {
    try{
    const {title,description,email}= req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
       const list=await List.findByIdAndUpdate(req.params.id,{ title,description});
       res.status(200).json({
        succes:true,
        list
       })



    }
    else {
        res.status(404).json({
            success: false,
            message: 'User  not found'
        });
    }
 }catch(err){
    console.log(err)
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
 }
}
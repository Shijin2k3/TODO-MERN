const List=require('../models/listModel');
const User = require('../models/userModel');

exports.addTask=async(req,res,next) => {
    try{
    const {title,description,id}= req.body;
    const existingUser=await User.findById(id);
    if(existingUser){
        const list=new  List({title,description,user:existingUser});
        if (!existingUser.list) {
            existingUser.list = []; 
        }

        existingUser.list.push(list);
        await list.save();
        await existingUser.save();
        return res.status(200).json({
            success:true,
            list
        })
    }
    else {
        return res.status(404).json({
            success: false,
            message: 'User  not found'
        });
    }
 }catch(err){
    console.log(err)
    return res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
 }
}
// update task
exports.updateTask=async(req,res,next) => {
    
    try{
        const id=req.body.user;
    const taskId=req.body._id;    
    const {title,description}= req.body;
    const existingUser=await User.findById(id);
    console.log(existingUser)
    if(existingUser){
       let list=await List.findByIdAndUpdate(taskId.trim(),{ title,description},{ new: true, runValidators: true });
       if(!list){
        return res.status(404).json({ message: "Task not found" });
       }
       return res.status(200).json({
        succes:true,
        message:"task Updated",
        list
       })
    }
    else {
        return res.status(404).json({
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
//delete task
exports.deleteTask=async(req,res,next) => {
    try{
    const taskId = req.params.id;   
    const userId = req.body.id;
    const existingUser=await User.findByIdAndUpdate(userId,{$pull:{list : taskId}});
    if(existingUser){
       let list=await List.findByIdAndDelete(taskId);
        return res.status(200).json({
        succes:true,
        message:"task deleted",
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

exports.getTask= async (req,res,next) =>{
 try{  const list=await List.find({user:req.params.id});

 if(list.length !== 0){
    return res.status(200).json({
    success:true,
    list
   })
  }else{
    res.status(200).json({
        success:true,
        message:"No Task"
       })
  }

}
catch(err){
    console.log(err)
    res.status(400).json({
        message:"Internal server Error"
    })
}
}
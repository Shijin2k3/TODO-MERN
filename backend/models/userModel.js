const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Enter your email"],
        unique:true
    },
    username:{
        type:String,
        required:[true,"Enter your username"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Enter password"],
        
    },
    list:{
        type:mongoose.Types.ObjectId,
        ref:"list"
    }
})

const User=mongoose.model('user',userSchema);
module.exports=User;
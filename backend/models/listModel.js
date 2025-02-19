const mongoose=require('mongoose');

const listSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Enter a title"]
    },
    description:{
        type:String,
        required:[true,"Enter description"]
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }

})

const List=mongoose.model('list',listSchema);
module.exports=List;
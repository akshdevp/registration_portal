var mongoose=require("mongoose");

module.exports=mongoose.model("message",{ 
    msg: String,
    user:{type:mongoose.Schema.ObjectId,ref:'User'}
    });
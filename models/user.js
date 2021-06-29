const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userTochannel:{
       type:String,
       required:true 
    },
    UserToDate:{
        type:String,
        required:true,
        default:Date.now
    }
})
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;
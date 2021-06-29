const express=require('express');
const userModel = require('../models/user');
const router=express.Router();
//models
const User=require('../models/user')
//Getting all
router.get('/',async(req,res)=>{
   try{
      const users=await User.find();
      res.json(users)
   }catch(err)
   {
      res.status(500).json({message:err.message})
   }
   
})
//Getting one
router.get('/:id',getUser,(req,res)=>{
   res.send(res.user)
})
//creating One
router.post('/',async(req,res)=>{
   const user=new User({
      name:req.body.name,
      userTochannel:req.body.userTochannel,
     
   })
   try
   {
       const newUser=await user.save();
       res.status(201).json(newUser)
   }catch(err)
   {
      res.status(400).json({message:err.message})
   }
})
//updating One
router.patch('/:id',getUser,async(req,res)=>{
    if(req.body.name!=null)
    {
       res.user.name=req.body.name;
    }
    if(req.body.userTochannel!=null)
    {
       res.user.userTochannel=req.body.userTochannel;
    }
    try
    {
       updatedUser=await res.user.save();
       res.json(updatedUser)
    }catch(err)
    {
       return res.status(500).json({message:err.message})
    }
})
//Deleting one
router.delete('/:id',getUser,async(req,res)=>{
  try
  {
     await res.user.remove();
     res.json({message:'Deleted user successfully'})
  }catch(err)
  {
      return res.status(500).json({message:err.message})
  }
})
 async function getUser(req,res,next){
   let user;
   try{
           user=await User.findById(req.params.id)
           if(user==null)
           {
              return res.status(404).json({message:'canot find user'})
           }
     }catch(err){
           return res.status(500).json({message:err.message})
     }
     res.user=user;
     next();
 }



module.exports=router;
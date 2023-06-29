const { response } = require('express');
const User = require('../model/User');




module.exports.addUser = async(req,res)=>{
    console.log('Add user');
    try{
       let exist=await User.findOne({sub:req.body.sub});
       const users =await User.find({});
       console.log('users:: ',users);
       if(exist){
        // console.log(exist);
        res.status(200).json({msg:'user alreadyt exist'});
        return;
       }

       const newUser = new User(req.body);
       await newUser.save();
      res.status(300).json(newUser);
    }
    catch(e){
        return response.status(500).json(e.message);
    }
}

module.exports.getUsers = async(req,res)=>{
    try{
        const users = await User.find({});
        return res.status(200).json(users);    }
    catch(e){
        return res.status(500).json(e.message);
    }
}




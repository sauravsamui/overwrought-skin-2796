const {Router} = require("express");
const UserModel = require("../model/auth.model")
const authRouter = Router();

authRouter.post("/signup",async(req,res)=>{

    const creds = await new UserModel(req.body)
    creds.save((err,succ)=>{
        if(err){
            res.status(500).send({message:"Error/try again"});
        }else{
            res.status(200).send({message:"successfully registered"});
        }
    })
})

authRouter.post("/login",async(req,res)=>{
    console.log(req.body)
    const match = await UserModel.find(req.body);
    if(match.length>0){
        let {username,_id} = match[0];
    
    let payload ={
        username,
        _id
    }
    res.send({payload});
  }
  else{
    res.send({message:"wrong credential"});
  }
})


module.exports = authRouter

const user=require('../Model/userModel');

// user registeration Start
const register=async (req,res)=>{
    // console.log('hii Registertion Done');
   const {name,email,password}=req.body;
   if(!name || !email || !password  ){
    return res.status(400).json({
        successful:false,
        message:"Pass all information",
    })
   }

   const userExists=await user.findOne({email});   // if Db is empty then its function generate error 
   if(userExists){
    return res.status(400).json({
        message:"User Already Exist",
    })
   }
   // Now i can create user 

   const userIns=await user.create({
    name,
    email,
    password,
   });

   if(userIns){
    return res.status(200).json({userIns});
   }
   else{
    return res.status(400).json({
        message:'Fail to create User Instance ',
    })
   }

  


}

module.exports={
    register,
}
const mongoose=require('mongoose');

const connectToDB=async (url)=>{
  try{ 
    await  mongoose.connect(url)
    console.log('Connected To DB!');
}
catch(e){
    console.log('Fail connection to DB'+e);
}
}

module.exports=connectToDB;

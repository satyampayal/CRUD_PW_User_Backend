const {Schema,model}=require('mongoose');

const userSchema= new Schema({
    name:{
        type:String,
        MinLength:[4,'At least 4 charcter need'],
        maxLength:[20,'At max onlt 20'],
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        MinLength:[4,'At least 4 charcter need'],
        maxLength:[20,'At max onlt 20'],
        required:true
    }
});

const user= model('user',userSchema);

module.exports=user;
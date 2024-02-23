const express=require('express');
const Router=express.Router();
const {register}=require('../Controllers/userController');


Router.post('/register',register);



module.exports=Router;
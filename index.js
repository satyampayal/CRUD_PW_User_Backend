const express=require('express');
const app=express();
const connectToDb=require('./Db/userDB');
const env=require('dotenv').config();


// DB Connection 
connectToDb(process.env.MONGODBURL);
app.use((req,res)=>{
    res.send('Hi');
}).listen(4567,()=>{
    console.log("Connected!");
})
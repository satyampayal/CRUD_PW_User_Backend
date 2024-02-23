const express=require('express');
const app=express();
const connectToDb=require('./Db/userDB');
const env=require('dotenv').config();
const Router=require('./Router/router');


app.use(express.json());
app.use(Router);

// DB Connection 
connectToDb(process.env.MONGODBURL);
app.use('/ping',(req,res)=>{
    res.send('pong');
})



app.listen(4567,()=>{
    console.log("Connected!");
})
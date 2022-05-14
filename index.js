const express=require('express');
const dotenv=require('dotenv');
const database =require('./database');
var app =express();
const productRouter=require('./router/product');


dotenv.config();

database.mongooseconnect();

app.use(express.json());
// app.use('/',(req,res,next)=>{
//     res.send("Hello im middleware '/' ");
//     next();
// })

app.use('/product',productRouter);

app.listen(process.env.ENVIRONMENT || 5000);
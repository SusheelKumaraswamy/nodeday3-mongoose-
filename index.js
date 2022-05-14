const express=require('express');
const dotenv=require('dotenv');
const database =require('./database');
var app =express();
const productRouter=require('./router/product');


var cors= require('cors');


app.use(cors());
dotenv.config();
database.mongooseconnect();


app.use(express.json());
// app.use('/',(req,res,next)=>{
//     res.send("Hello im middleware '/' ");
// })

app.use('/product',productRouter);
console.log(process.env.ENVIRONMENT);
app.listen(process.env.PORT || 5000);

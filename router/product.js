const express= require('express');
var router=express.Router();
var postModule=require('../module/product');

router.post('/postdetials',postModule.createProduct);

router.get('/findproduct',postModule.findProduct);

router.put('/updateProduct/:prodid',postModule.updateproduct);



module.exports =router;
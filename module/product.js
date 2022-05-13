const productModel=require('../model/product');

//Create Mentor
exports.createProduct=async(req,res,next)=>{
    const productData=new productModel({...req.body});
        try{
            var response=await productData.save();
            res.send(response);
        }
        catch(e){console.log(e)}
   
}

exports.findProduct=async(req,res,next)=>{
    try {
        const findData=await productModel.find();
        res.send(findData);
        
    } catch (error) {
        console.log(error);
    }
}

exports.updateproduct=async(req,res,next)=>{
    try {
        const response=await productModel.findOneAndUpdate({_id:req.params.prodid},{...req.body},{runValidators:true,new:true});
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}




const mongoose = require('mongoose');

module.exports={
    async mongooseconnect(){
        mongoose.connect(process.env.MONGO_URL);
        console.log(process.env.MONGO_URL);
    }
}
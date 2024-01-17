const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    oldprice:{
        type:Number,
        required:true
    },
    desc:{
         type:String,
         required:true,
    },
    image:{
        type:String,
        required:true,
    }
})



module.exports = mongoose.model('Product',productSchema)

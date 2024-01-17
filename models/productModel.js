const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    qunatity:{
        type:String,
        required:true,
    }
})



module.exports = mongoose.model('Product',productSchema)

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
    // image:{
    //     type:String,
    //     required:true,
    // },
    quantity:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    }
})



module.exports = mongoose.model('Product',productSchema)

const mongoose = require('mongoose')

const newsLetter = mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})


module.exports = mongoose.model('NewsLetter',newsLetter)
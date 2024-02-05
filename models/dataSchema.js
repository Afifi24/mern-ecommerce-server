const mongoose = require('mongoose')

const dataSchem = mongoose.Schema({
    data:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('Data',dataSchem)
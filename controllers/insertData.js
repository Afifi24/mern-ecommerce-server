const Data = require('../models/dataSchema')
const men = require('../config/data')

const insertData = async(req,res)=>{
    try {
        Data.insertMany(men)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}

module.exports = insertData
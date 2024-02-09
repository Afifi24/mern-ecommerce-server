const Data = require('../models/dataSchema')
const {men,women,kids,newCollections} = require('../config/data')


// men
const insertData = async(req,res)=>{
    try {
        Data.insertMany(men)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}
const getDatat = async(req,res)=>{
    try {
        const data = await Data.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
// women
const insertWomenData = async(req,res)=>{
    try {
        Data.insertMany(women)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}
const getWomenData = async(req,res)=>{
    try {
        const data = await Data.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {insertData,getDatat,insertWomenData,getWomenData} 
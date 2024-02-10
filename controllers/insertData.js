const Data = require('../models/dataSchema')
const womenData = require('../models/womenSchema')
const childSchema = require('../models/childSchema')
const newCollectionSchema = require('../models/newCollectionData')
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
        womenData.insertMany(women)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}
const getWomenData = async(req,res)=>{
    try {
        const data = await womenData.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
// child
const insertChildData = async(req,res)=>{
    try {
        childSchema.insertMany(women)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}
const getChildData = async(req,res)=>{
    try {
        const data = await childSchema.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
// newcollections
const insertnewCollectionData = async(req,res)=>{
    try {
        newCollectionSchema.insertMany(women)
        res.json('data posted')
    } catch (error) {
        console.log(error)
    }
}
const getnewCollectionData = async(req,res)=>{
    try {
        const data = await newCollectionSchema.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {insertData,getDatat,insertWomenData,getWomenData,insertChildData,getChildData,insertnewCollectionData,getnewCollectionData} 
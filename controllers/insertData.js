const Data = require('../controllers/insertData')
const men = require('../config/data')

const insertData = async(req,res)=>{
    try {
        Data.insertMany({men})
        res.json('data posted')
    } catch (error) {
        
    }
}

module.exports = insertData
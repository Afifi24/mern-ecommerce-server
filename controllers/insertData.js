const Data = require('../controllers/insertData')


const insertData = async(req,res)=>{
    try {
        Data.insertMany({})
        res.json('data posted')
    } catch (error) {
        
    }
}
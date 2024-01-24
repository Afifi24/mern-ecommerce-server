const newsLetter = require('../models/newsletter')



const SendEmail = async(req,res)=>{
    res.json({msg:'the email has been sent succefuly'})
}


module.exports = SendEmail
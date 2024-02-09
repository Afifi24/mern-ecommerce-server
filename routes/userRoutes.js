const  express = require('express')
const { LoginUser, RegisterUser } = require('../controllers/userController') 
const {insertData,getDatat,insertWomenData,getWomenData} = require('../controllers/insertData')

const router = express.Router()



router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post('/insertWomenData',insertWomenData)
router.get('/getWomenData',getWomenData)
router.post('/insertData',insertData)
router.get('/getData',getDatat)
module.exports = router
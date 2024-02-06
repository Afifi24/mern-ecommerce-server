const  express = require('express')
const { LoginUser, RegisterUser } = require('../controllers/userController') 
const {insertData,getDatat} = require('../controllers/insertData')

const router = express.Router()



router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post('/insertData',insertData)
router.get('/getData',getDatat)

module.exports = router
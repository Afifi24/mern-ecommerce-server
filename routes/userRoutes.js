const  express = require('express')
const { LoginUser, RegisterUser } = require('../controllers/userController') 
const insertData = require('../controllers/insertData')

const router = express.Router()



router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post('/insertData',insertData)

module.exports = router
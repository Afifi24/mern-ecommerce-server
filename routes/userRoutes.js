const  express = require('express')
const { LoginUser, RegisterUser } = require('../controllers/userController') 
const {insertData,getDatat,insertWomenData,getWomenData,insertChildData,getChildData,insertnewCollectionData,getnewCollectionData} = require('../controllers/insertData')

const router = express.Router()



router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post('/insertWomenData',insertWomenData)
router.get('/getWomenData',getWomenData)
router.post('/insertChildData',insertChildData)
router.get('/getChildData',getChildData)
router.post('/insertData',insertData)
router.get('/getData',getDatat)
router.post('/insertnewCollectionData',insertnewCollectionData)
router.get('/getnewCollectionData',getnewCollectionData)
module.exports = router
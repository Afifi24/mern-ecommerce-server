const express = require('express')

const router = express.Router()
const {AddProduct,GetProduct,DeleteProduct,UpdateProduct} = require('../controllers/productController')


router.post('/',AddProduct)
router.get('/',GetProduct)
router.put('/',UpdateProduct)
router.delete('/',DeleteProduct)


module.exports = router



const express = require('express')

const router = express.Router()
const {AddProduct,GetProduct,DeleteProduct,UpdateProduct} = require('../controllers/productController')


router.route('/').post(AddProduct).get(GetProduct)
router.route('/:id').put(UpdateProduct).delete(DeleteProduct)


module.exports = router



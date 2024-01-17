const Product = require('../models/productModel')


// add product 

const AddProduct = async(req,res)=>{
    try {
        const {title,price,quantity,image} =req.body
        res.json({error:'add product '})
    } catch (error) {
        console.log(error)
    }
}


// get product
const GetProduct = async(req,res)=>{
    try {
        const {id} = req.user.id
        const product = await Product.find({user:id})
        res.status(200).json(product)
       
    } catch (error) {
        console.log(error)
    }
}

// get product
const UpdateProduct = async(req,res)=>{
    try {
        res.json({error:'update product '})
    } catch (error) {
        console.log(error)
    }
}


// get product
const DeleteProduct = async(req,res)=>{
    try {
        res.json({error:' delete product '})
    } catch (error) {
        console.log(error)
    }
}



module.exports= {AddProduct,GetProduct,DeleteProduct,UpdateProduct}
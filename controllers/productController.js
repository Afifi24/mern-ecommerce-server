const Product = require('../models/productModel')


// add product 

const AddProduct = async(req,res)=>{
    try {
        const {title,price,quantity,image} =req.body
        const newProduct = await Product.create({
            title,
            price,
            quantity,
            user:req.user.id
        })
        res.json(newProduct)
    } catch (error) {
        console.log(error)
    }
}


// get products
const GetProduct = async(req,res)=>{
    try {
        const id = req.user.id
        const product = await Product.find({user:id})
        res.status(200).json(product)
       
    } catch (error) {
        console.log(error)
    }
}

// update product
const UpdateProduct = async(req,res)=>{
    try {
        res.json({error:'update product '})
    } catch (error) {
        console.log(error)
    }
}


// delete product
const DeleteProduct = async(req,res)=>{
    try {
        res.json({error:' delete product '})
    } catch (error) {
        console.log(error)
    }
}



module.exports= {AddProduct,GetProduct,DeleteProduct,UpdateProduct}
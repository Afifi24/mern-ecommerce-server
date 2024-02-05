const Product = require('../models/productModel')


// add product 

const AddProduct = async (req, res) => {
    
    try {
        const { title, price, quantity,link } = req.body;
        const newProduct = await Product.create({
            title,
            price,
            quantity,
            user: req.user.id, 
            link,
            
        });
        res.json(newProduct)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



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
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        if(!product){
            res.status(400).json({error:'product not found'})
        }
        if(!req.user){
            res.json({error:'user not found'})
        }
        if(product.user.toString() !== req.user.id){
            res.json({
                error:'user not authorized'
            })
        }
        const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(updateProduct)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


// delete product



 const DeleteProduct = async (req,res)=>{
    const {id} = req.params

    try {
        const product = await Product.findById(id)
        if(!product){
            res.status(400).json({error:'Product not found'})
        }
        if(!req.user){
            res.json({error:'user not found'})
        }
        if(product.user.toString() !== req.user.id){
            res.json({
                error:'user not authorized'
            })
        }

        const deleteProduct = await Product.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).json(deleteProduct)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

}

module.exports= {AddProduct,GetProduct,DeleteProduct,UpdateProduct}
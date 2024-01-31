const Product = require('../models/productModel')


// add product 

const AddProduct = async(req,res)=>{
    try {
        const {title,price,quantity} =req.body
        // add image here
        const image = await req.files
        image.mv(path.join(__dirname, '..', 'uploads',newFilename), async (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Error uploading avatar' });
            } else {
                const newProduct = await Product.create({
                    title,
                    price,
                    quantity,
                    user:req.user.id,
                    image

                })
              res.json(newProduct);
            }
          })
        
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
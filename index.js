const express =require('express') 
const dotenv = require('dotenv') 
const cors = require('cors') 
const connectDB =  require('./config/db')
const upload = require('express-fileupload')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const verifyToken = require('./middlware/auth')


dotenv.config()



const app = express()

connectDB()
// midlleware 
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(upload())
app.use('/uploads',express.static(__dirname + '/uploads'))





const port = process.env.PORT

app.listen(port,()=>{
    console.log(`the server is listining on the port ${port}...`)
})


// routes

app.use('/ecommerce',userRouter)
app.use('/product',verifyToken,productRouter)

// !stripe payment method

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/create',async(req,res)=>{
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items:req.body.items.map(item=>{
                return{
                    price_data:{
                        currency:'MAD',
                        product_data:{
                            name:item.name
                        },
                        unit_amount:(item.price)*100
                    },
                    quantity:item.quantity
                }
            }),
            // succes_url:'http://localhost:5173/success',
            // cancel_url:'http://localhost:5173/cancel',
        })
        res.json({url:session.url})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
})

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
app.use('/product',productRouter)



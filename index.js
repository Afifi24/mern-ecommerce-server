import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import upload from 'express-fileupload'
import path from 'path';
import userRouter from './routes/userRoutes.js'

dotenv.config()



const app = express()

connectDB()
// midlleware 
app.use(express.json())
app.use(cors())
app.use(upload())


const uploadsPath = path.resolve(import.meta.url.slice(7), 'uploads');
app.use('/uploads', express.static(uploadsPath));
 
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`the server is listining on the port ${port}...`)
})


// routes

app.use('/ecommerce',userRouter)



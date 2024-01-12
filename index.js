import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
dotenv.config()

const app = express()

connectDB()
// midlleware 
app.use(express.json())
app.use(cors())

 
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`the server is listining on the port ${port}...`)
})




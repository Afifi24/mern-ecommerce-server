import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


const app = express()


// midlleware 
dotenv.config()
app.use(express.json())
app.use(cors())

 
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`the server is listining on the port ${port}...`)
})




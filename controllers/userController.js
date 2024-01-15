import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {v4 as uuid} from 'uuid'
import path from 'path'
// register 
export const RegisterUser = async(req,res)=>{
  const {name,email,password} = req.body
  const {avatar} = req.files
  try {
      if(!name || !email || !password ){
        res.json({msg:'Fill in all fields'})
      }
      // avatar file
      if(!avatar){
        res.json({msg:'Please choose an image'})
      }
      if(avatar.size){
        res.json({msg:'Profile picture too big. Should be less than 500kb'})
      }
      let fileName
      fileName = avatar.name
      let spilltedFilename = fileName.split('.')
      let newFilename = spilltedFilename[0] + uuid() + spilltedFilename[spilltedFilename.length -1]
      avatar.mv(path.join(__dirname, '..','uploads',fileName),async(err)=>{
        if(err){
          res.json({msg:'there is some error in avatar'})
        }
      })




      const newEmail = email.toLowerCase()
      const emailExist = await User.findOne({email:newEmail})
      if(emailExist){
        res.json({msg:'Email already exists'})
      }
      if(password.trim().length<6){
        res.json({msg:'password should be at least 6 characters'})
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPass = await bcrypt.hash(password,salt)
      const newUser = await User.create({
        name,
        email:newEmail,
        password:hashedPass
      })
      res.json(newUser)
  } catch (error) {
    console.log(error)
  }
}









// login

export const LoginUser = async(req,res)=>{
  const {email,password} = req.body
try {
   if(!email || !password){
    res.json({msg:'Fill in all fields'})
   }
   const newEmail = email.toLowerCase()
   const user = await User.findOne({email:newEmail})
   if(!user){
    res.json({msg:'Invalid credentials'})
   }
   const comparePass = await bcrypt.compare(password,user.password)
   if(!comparePass){
    res.json({msg:'Invalid credentials'})
   }
  //  add token
   const {_id:id,name} = user
   const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:'1d'})
   res.json({user,token})
} catch (error) {
  console.log(error)
}
}


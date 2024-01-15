import User from '../models/userModel.js'
import bcrypt from 'bcrypt'


// register 
export const RegisterUser = async(req,res)=>{
  const {name,email,password} = req.body
  const avatar = req.file
  try {
      if(!name || !email || !password){
        res.json({msg:'Fill in all fields'})
      }
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
res.json({msg:'login user '})
}


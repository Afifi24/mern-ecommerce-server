const User =  require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {v4 : uuid} = require('uuid')
const path = require("path");


 const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  const avatar = req.files?.avatar;

  try {
    if (!name || !email || !password) {
      res.json({ msg: 'Fill in all fields' });
      return;
    }

    // avatar file
    if (!avatar) {
      res.json({ msg: 'Please choose an image' });
      return;
    }

    if (avatar.size > 500000) {
      res.json({ msg: 'Profile picture too big. Should be less than 500kb' });
      return;
    }

    let fileName = avatar.name;
    let spilltedFilename = fileName.split('.');
    let newFilename = spilltedFilename[0] + uuid() + spilltedFilename[spilltedFilename.length - 1];

    const newEmail = email.toLowerCase();
    const emailExist = await User.findOne({ email: newEmail });

    if (emailExist) {
      res.json({ msg: 'Email already exists' });
      return;
    }

    if (password.trim().length < 6) {
      res.json({ msg: 'Password should be at least 6 characters' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

   

    avatar.mv(path.join(__dirname, '..', 'uploads',newFilename), async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error uploading avatar' });
      } else {
        const newUser = await User.create({
          name,
          email,
          password: hashedPass,
          avatar: newFilename,
        });
        res.json(newUser);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};










// login

 const LoginUser = async(req,res)=>{
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


module.exports = {RegisterUser,LoginUser}
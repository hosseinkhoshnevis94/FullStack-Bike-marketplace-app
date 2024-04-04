import User from "../models/userModels.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt  from "jsonwebtoken"

//signup user
export const signupUser = async(req,res,next ) =>{
    try{
        const {username,email,password} = req.body
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = new User({username,email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:"User created successfully"})
        
    }catch(error){
        next(error)
    }
}

//signin user
export const signinUser = async(req,res,next) =>{
    const {email,password} = req.body
    try{
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404,'User not found!'))
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,"Wrong password!"))
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const response = {email};
        res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json({message:'Login successfuly',data:{email}})
    }catch(error){
        next(error)
    }
}
import User from "../models/userModels.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt  from "jsonwebtoken"
import generatePassword from "../utils/generatePassword.js"

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

//google
export const google = async (req,res,next) =>{
    const {name,email,photo} = req.body
    try{
        const user = await User.findOne({email})
        if(user){
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
            const response = {name,email,photo}
            res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json({message:'Login successfuly',data:response})
        }else{
            const generatedPassword = generatePassword()
            const hashedPassword = bcryptjs.hashSync(generatedPassword,10)
            const randomNumber = generatePassword(5)
            const newUser = new User({username:name,email,password:hashedPassword,avatar:photo})
            await newUser.save()
            const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
            res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json({message:'User created successfully',data:{name,email,photo}})

        }
    }catch(error){
        next(error)
    }
}
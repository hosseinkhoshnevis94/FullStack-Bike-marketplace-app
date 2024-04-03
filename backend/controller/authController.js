import User from "../models/userModels.js"
import bcryptjs from 'bcryptjs'

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

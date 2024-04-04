import express from 'express'
import {signupUser,signinUser} from '../controller/authController.js'

const router = express.Router()


//signup route
router.post('/signup',signupUser)

//signin route
router.post('/signin',signinUser)


export default router
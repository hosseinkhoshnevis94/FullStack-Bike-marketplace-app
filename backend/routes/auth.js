import express from 'express'
import {signupUser,signinUser, google} from '../controller/authController.js'

const router = express.Router()


//signup route
router.post('/signup',signupUser)

//signin route
router.post('/signin',signinUser)

//google auth
router.post('/google',google)

export default router
import express from 'express'
import {signupUser} from '../controller/authController.js'

const router = express.Router()


//signup route
router.post('/signup',signupUser)


export default router
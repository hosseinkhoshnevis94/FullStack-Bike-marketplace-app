import express from 'express'
import {loginUser , signupUser} from '../controller/userController.js'

const router = express.Router()

//controllers

//login route
router.post('/login',loginUser)




export default router
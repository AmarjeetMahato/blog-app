

import express from "express"
import { SignIn, SignUp, getAllUser, logout } from "../controller/userController.js"


const router = express.Router()

router.get('/alluser/:id',getAllUser)
router.post('/signup',SignUp)
router.post('/signin',SignIn)
router.post('/logout',logout)



export default router
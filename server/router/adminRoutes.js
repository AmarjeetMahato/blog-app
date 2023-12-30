import express from "express"
import { AdminSignin, AdminSignup, Adminlogout } from "../controller/adminController.js"


const router = express.Router()


router.post(`/adminsignup`,AdminSignup)
router.post(`/adminsignin`,AdminSignin)
router.post(`/adminlogout`,Adminlogout)






export default router
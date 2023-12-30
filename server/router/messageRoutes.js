import express from "express"
import { AllComments, messagePost } from "../controller/messagePost.js"




const router = express.Router()



router.post(`/message`,messagePost)
router.get(`/allmessage`,AllComments)




export default router



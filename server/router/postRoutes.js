import express from "express"
import { deletePost, postData, singlePostData } from "../controller/postController.js"


const router  = express.Router()


router.get(`/post`,postData)
// Food Post
router.get(`/food/:id`,singlePostData)
router.delete(`/food/:id`,deletePost)


// MusicRoutes
router.get(`/music/:id`,singlePostData)
router.delete(`/music/:id`,deletePost)


// Travel Routes
router.get(`/travel/:id`,singlePostData)
router.get(`/travel/:id`,deletePost)



// Education
router.get(`/education/:id`,singlePostData)
router.get(`/education/:id`,deletePost)






export default router
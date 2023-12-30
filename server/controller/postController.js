import prisma from "../libs/prismabd.js";
import cloudinary from "cloudinary"

export const postData = async (req, res) => {

    try {
           const getData = await prisma.post.findMany()
           return res.status(200).json(getData)
    } catch (error) {
        console.log(error);
    }
}


export const singlePostData = async(req, res) => {
           const {id} = await req.params
       try {
          
          const singlePost = await prisma.post.findUnique({
            where:{
                id
            }
          })
         
          if(!singlePost){
            return res.status(404).json({msg:"No post found"})
        }

        return res.status(200).json(singlePost)
       } catch (error) {
         console.log(error);
       }
}


export const deletePost = async(req,res) => {
  
    try {
      const { id } = await req.params; 

      const existingPost = await prisma.post.findUnique({
        where: {
          id,
        },
      });

      if (!existingPost) {
        return res.status(404).json({ error: "Post not found" });
      }

    
  
    
         const deletePost = await prisma.post.delete({
          where:{
            id
          }
         })
         
         const { public_id } = existingPost;
         await cloudinary.v2.uploader.destroy(public_id);
     


      return res.status(200).json({msg:"Post has been deleted"})   
    } catch (error) {
      console.log(error);
    }
}
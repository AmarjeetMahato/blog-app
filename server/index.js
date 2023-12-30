import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import bodyParser from  "body-parser"
import userRoutes from "./router/userRoutes.js"
import adminRoutes from "./router/adminRoutes.js"
import postRoutes from "./router/postRoutes.js"
import contactRoutes from "./router/contactRoutes.js"
import messageRoutes from "./router/messageRoutes.js"
import prisma from "./libs/prismabd.js"
import multer from "multer"
import cloudinary from "cloudinary"
import {CloudinaryStorage} from "multer-storage-cloudinary"

dotenv.config()
const PORT = process.env.PORT || 8000


const app = express()

app.use(morgan('dev'))
app.use(express.json({limit:"50mb"}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))


cloudinary.v2.config({
  cloud_name:process.env.cloudinary_name,
  api_key:process.env.api_Key,
  api_secret:process.env.api_Secret
})


// Storage for user avatars
const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  });


// Storage for post images
// const postImageStorage = new CloudinaryStorage({
//   cloudinary:cloudinary,
//   params:{
//       folder: 'uploads/images',
//       allowed_formats: ['jpg', 'png', 'jpeg'],
//   }
// })


  // const uploadAvatar = multer({ storage: avatarStorage });
export const uploadPostImage = multer({ storage: ImageStorage });


app.use('/uploads/images', express.static('uploads/images'));


//User Routes
app.use('/api/auth',userRoutes)


// Admin Routes
app.use('/api/auth',adminRoutes)


// Contact Routes
app.use(`/api/auth`,contactRoutes)


// Comments Routes
app.use(`/api/auth`,messageRoutes)



// Post Routes
app.use(`/api/auth`,postRoutes)
app.use('/api/auth/uploads',uploadPostImage.single('image'),async (req, res) => {
               
  console.log(req.body, req.file);
  try {
       const {title, desc, category } = await req.body;
       
       const result = await cloudinary.v2.uploader.upload(req.file.path)
         
      console.log('Received Data:', { title, desc,category, result });

      
      if(!title || !desc || category === undefined) {
          return res.status(401).json({msg:`All Fields are required`})
      }

      

      const blogData = await prisma.post.create({
          data:{
              title,
              desc,
              category,
              image:result.url ,
              public_id : result.public_id
          }
      })
         
      console.log(blogData);
      return res.status(201).json({
          data:blogData,
          msg:`Posted data Sucessfully`
      })
  
  } catch (error) {
      console.log(error);
  }})


// Update the post
app.put('/api/auth/update/:id',uploadPostImage.single('image'), async(req,res)=>{
      
    const {public_id,id} = await req.params;
    console.log(public_id);
    const { title, desc } = req.body;

    if(req.file){
      const result = await cloudinary.v2.uploader.upload(req.file.path,{
        public_id,
        overwrite:true
      });
      
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          title,
          desc,
          image: result.url,
          public_id: result.public_id,
        },
      });

      return res.status(200).json({
        data: updatedPost,
        msg: 'Post updated successfully with a new image.',
      });
    }else {
      // Update post without changing the image
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          title,
          desc,
        },
      });

      return res.status(200).json({
        data: updatedPost,
        msg: 'Post updated successfully.',
      });
    }
})




app.listen((PORT), ()=>console.log(`Server running on port ${PORT}`))
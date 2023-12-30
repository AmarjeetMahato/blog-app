import cloudinary from "cloudinary"
import {CloudinaryStorage} from "multer-storage-cloudinary"


cloudinary.v2.config({
    cloud_name:process.env.cloudinary_name,
    api_key:process.env.api_Key,
    api_secret:process.env.api_Secret
})




export default cloudinary
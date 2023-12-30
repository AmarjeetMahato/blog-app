import cookieToken from "../cokkieToken/cookieToken.js";
import prisma from "../libs/prismabd.js"
import bcrypt from "bcrypt"


export const getAllUser = async(req,res) => {
   const { id } = await req.params; 
      try {
           const alluser = await prisma.user.findUnique({
            where:{
               id
            }
           })
         //   console.log({alluser:alluser});
           return res.status(200).json(alluser)
      } catch (error) {
           console.log(error);
      }
}


export const SignUp = async(req, res, next) => {
    try {
          let  {name, email, password} = await req.body;
          
          if(!name || !email || !password) {
             return res.status(400).json({msg:`All Fields are required..`})
          }

          const user = await prisma.user.findUnique({
           where:{
               email
           }
          })

          if(user){
             return res.status(404).json({msg:`Email Already exist`})
          }

          const hashedpassword = await bcrypt.hash(password,10)

       
           await prisma.user.create({
           data:{
               name,
               email,
               password:hashedpassword,
              
           }
          })
            // Set Cache-Control header to 'no-store'
           //  res.setHeader('Cache-Control', 'no-store');

          return res.status(201).json({msg:`User has been created..`})
    } catch (error) {
       console.log(error);
       return res.status(500).json({msg:`Somthing went wrong ${error}`})
    }
}




// Signin 

export const SignIn = async(req,res,next) => {
    try {
          const {email, password} = await req.body;
          
          if(!email || !password) {
             return res.status(400).json({msg:`Need all fields`})
          }
 
          
          const user = await prisma.user.findUnique({
             where:{
                 email
             }
            })
 
            if(!user){
               return res.status(404).json({msg:`No user found`})
            }
 
            const comparePassword = await bcrypt.compare(password,user.password)
            if(!comparePassword) return res.status(404).json({msg:`Wrong password`})
 
            cookieToken(user,res)
 
    } catch (error) {
       console.log(error);
       return res.status(500).json({msg:'Somthing went wrong'})
    }
 }



// Logout User

 export const logout = async(req,res) => {
   try {
        res.clearCookie('token').json({
          success:true,
          msg:'User logged out'})
       
   } catch (error) {
      console.log(error);
   }
}

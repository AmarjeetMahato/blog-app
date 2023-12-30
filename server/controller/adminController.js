import adminCookieToken from "../cokkieToken/adminCookieToken.js";
import prisma from "../libs/prismabd.js"
import bcrypt from "bcrypt"

export const AdminSignup = async(req,res) => {
    try {
           let  {name, email, password} = await req.body;
           if(!name || !email || !password) return res.status(404).json({msg:`All fields are required..`})

           password='amar12'
           password = await bcrypt.hash(password,10)

           await prisma.user.create({
              data:{
                name:"Amar",
                email:"amajeetMahato12@gmail.com",
                password:password,
                role:'admin'
              }
           })

           return res.status(201).json({msg:`Admin has been created`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:`${error}`})
    }
}


export const AdminSignin = async(req, res) => {
    try {
         const {email, password} = await req.body;

         if (!email || !password) {
            return res.status(404).json({ msg: `All Fields are required` });
        }

         const admin = await prisma.user.findUnique({
            where:{
                email:"amajeetMahato12@gmail.com"
            }
         })

       if(password || password == "12345"){
            
           adminCookieToken(admin,res)
       }

    } catch (error) {
         console.log(error);
         return res.status(500).json({msg:`${error}`})
    }
}





export const Adminlogout = async(req,res) => {
    try {
         res.clearCookie('Admin_token').json({
           success:true,
           msg:'Admin logged out'})
        
    } catch (error) {
       console.log(error);
    }
}
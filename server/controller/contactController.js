import prisma from "../libs/prismabd.js";





export const contact = async (req,res) => {


      try {

   

         const {name,email, message, userId} = await req.body;


         if(!name || !email || !message || !userId) {
            return res.status(401).json({msg:"All fields are required"})
         }



                // Parse userId from the JSON string
    const userIdObject = JSON.parse(userId);
    const userPrismaId  = userIdObject.user.id;

         const contact = await prisma.contact.create({
            data:{
                name,
                email,
                message,
                user: {
                  connect: { id: userPrismaId  },
                },
            }
         })

         return res.status(201).json({msg:"Message sent successfully"})
      } catch (error) {
        console.log(error);
      }
}
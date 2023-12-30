import prisma from "../libs/prismabd.js";


export const AllComments = async (req, res) => {
       try {
               const allComments = await prisma.comment.findMany()  
               console.log(allComments); 
               return res.status(200).json(allComments)
       } catch (error) {
           console.log(error);   
       }
}





export const messagePost = async(req,res) => {
       try {
              const {comment, userId} = await req.body;

              if( !comment || !userId) {
                return res.status(401).json({msg:"All fields are required"})
             }

         // Parse userId from the JSON string
        const userIdObject = JSON.parse(userId);
        const userPrismaId  = userIdObject.user.id;
    
             const contact = await prisma.comment.create({
                data:{
                     comment,
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
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const contactForm  = z.object({
  name: z.string().refine(data => data.length > 0 , {message:"Name is required"}),
  email: z.string().refine(data => data.length > 0 , {message:"Email is required"}),
  message: z.string().refine(data => data.length > 0 , {message:"Message is required"}),
})


const Contact = () => {

  const {register, handleSubmit,formState: { errors, isSubmitting },reset} = useForm({
    resolver:zodResolver(contactForm),
    defaultValues:{
        name:"",
        email:"",
        message:""
    }
   })
 
      // Retrieve userId from local storage
      const userId = localStorage.getItem("CurrentUser");
      console.log(userId);
  const onsubmit = async (data) => {
 
       try {
              const res = await axios.post(`/api/auth/contact`,{...data,userId})
              if(res?.status === 201){
              alert('Message sent successfully')
              console.log(res.data);
              }
              reset()
       } catch (error) {
         console.log(error);
       }
  }
  return (
    <section className="flex flex-col  items-center justify-center mt-5">
               
               <div className="flex flex-col items-center">
                       <span>get in touch</span>    
                       <h1 className="text-[40px] uppercase font-semibold">Contact</h1>
               </div>

               <div className="mt-5 flex gap-6 items-center">
                      
                         {/* FormDetails */}

                         <div className="flex flex-col space-y-5">
                                 <div className="">
                                    <h1>Your Name</h1>
                                    <input {...register('name')} type="text" className="w-[300px] py-2 px-2 rounded-[5px] text-gray-600" />
                                    {errors.name &&  <p className="text-[12px] text-red-500 font-semibold">{errors.name.message}</p>  }
                                 </div>

                                 <div>
                                    <h1>Your Email</h1>
                                    <input {...register('email')} type="email" className="w-[300px] py-2 px-2 rounded-[5px] text-gray-600" />
                                    {errors.email &&  <p className="text-[12px] text-red-500 font-semibold">{errors.email.message}</p>  }
                                 </div>

                                 <div>
                                    <h1>Your Message</h1>
                                   <textarea {...register('message')}  name="message" id="message" cols="40" rows="5" className="w-[300px] py-2 px-2 rounded-[5px] text-gray-600"/>
                                   {errors.message &&  <p className="text-[12px] text-red-500 font-semibold">{errors.message.message}</p>  }
                                 </div>

                                 <button onClick={handleSubmit(onsubmit)} className="bg-blue-500 py-2 rounded-[5px] hover:bg-blue-600">
                                     {isSubmitting ? "Sending.." : "Send"}
                                 </button>
                         </div>
               </div>
    </section>
  )
}

export default Contact
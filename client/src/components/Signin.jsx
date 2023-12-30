import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const signinForm  = z.object({
  email: z.string().refine(data => data.length > 0 , {message:"Email is required"}),
  password: z.string().max(6,{message:"Password must be 6 character"}).refine(data => data.length > 0 , {message:"Password is required"}),
})



const Signin = () => {
    const navigate = useNavigate()
   const {register, handleSubmit,formState: { errors, isSubmitting }} = useForm({
    resolver:zodResolver(signinForm),
    defaultValues:{
        name:"",
        email:"",
        password:"",
        confirm_password:""
    }
   })


    const onsubmit = async(data) => {
      console.log(data);
      try {
           const res = await axios.post(`/api/auth/signin`,{...data})
           localStorage.setItem('CurrentUser',JSON.stringify(res.data) )
           if(res?.status === 200){
               console.log(res.data);
               alert('Login Sucessfully')
               navigate('/')

           }
      } catch (error) {
        console.log(error);
      }
            
    }


  return (
    <div className="flex items-center justify-center h-screen">
             <div className="bg-white flex items-center max-w-[1200px]">
                      {/* Image Sectiion */}
                       <div className="hidden md:py-0  md:block">
                          <img src="http://images.unsplash.com/photo-1593217188322-6a547f02ddb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Zm9yd2FyZHx8MHx8fHwxNjI5MjQ5NzI5&ixlib=rb-1.2.1&q=80&w=1080" alt=""
                          className=" object-cover h-[600px]" />
                       </div>


                       {/* Form */}
                       <form action="" className="flex items-center md:py-0 py-16 rounded-[5px] px-14 justify-center">
                   <div className="space-y-4 flex-col">
                         <div>
                               <h1 className="text-[30px] font-semibold">Sign In</h1>
                         </div>
                         <div>
                                <h1 className="text-[12px] font-semibold">Email</h1>
                                <input {...register('email')} type="email" placeholder="Name" className="px-4 outline-none placeholder:text-[12px] py-1 border border-gray-600 rounded-sm "/>
                                {errors.email &&  <p className="text-[12px] text-red-500 font-semibold">{errors.email.message}</p>  }
                           </div>
                           <div>
                                <h1 className="text-[12px] font-semibold">Password</h1>
                                <input {...register('password')} type="password" placeholder="password" className="px-4 outline-none placeholder:text-[12px] py-1 border border-gray-600 rounded-sm "/>
                                {errors.password &&  <p className="text-[12px] text-red-500 font-semibold">{errors.password.message}</p>  }
                           </div>
                             
                           <div className="flex  items-center justify-center">
                               <button onClick={handleSubmit(onsubmit)} className="flex bg-slate-700 w-full py-1 text-white rounded-md items-center justify-center">{isSubmitting ? "Submitting" : "Login"}</button>
                           </div>

                           <div>
                                 <p className="text-[12px] font-semibold">Don&apos;t  have an account? <Link to={"/signup"} className=" text-blue-500">Signup</Link></p>
                         </div>
                         </div>


                        
                          
                             
                       </form>
                       
             </div>
    </div>
  )
}

export default Signin
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

const commentsSchema = z.object({
  comment:z.string().refine(data => data.length > 0 , {message:"Message is required"} )
})

const Comments = () => {
  const {register,handleSubmit,formState:{errors},reset} = useForm({
    resolver:zodResolver(commentsSchema),
    defaultValues:{
      comment:""
    }
  })
  const userId = localStorage.getItem("CurrentUser");
  console.log(userId);


 const onsubmit = async (data) => {
      
   try {
           const res = await axios.post(`/api/auth/message`,{...data, userId})
           if(res?.status === 201) {
               alert('message send')
           }
           window.location.reload()
      reset()
   } catch (error) {
       console.log(error);
   }

 }


  return (
    <div>
          <h1 className="text-[35px] font-semibold">Comments</h1>

          <div className="flex items-center gap-3 mx-auto">
                <input {...register('comment')} type="text" className="px-4 flex-grow py-2 bg-transparent border border-gray-400 " placeholder="write your comments" />
                
                    <button onClick={handleSubmit(onsubmit)} type="submit" className="px-8 py-2 transition  bg-white font-semibold text-black hover:bg-green-400 ">Post</button>
              
          </div>
          {errors && errors.comment && <p className="text-red-500 text-[14px]">{errors.comment.message}</p>  }
    </div>
  )
}

export default Comments
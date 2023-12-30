import {z} from "zod" 
import {useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {  useState } from "react";
import axios from "axios"


const PostSchema = z.object({
    title:z.string().refine(data => data.length > 0 , {message:"Title is required"}),
    desc: z.string().refine(data => data.length > 0 , {message:"Description is required"})
})

const CreatePost = () => {
  
    const [image, setImage] = useState('')
    const [category, setCategory] = useState()
    const {register, handleSubmit, formState:{errors, isSubmitting},reset, }  = useForm({
        resolver:zodResolver(PostSchema),
        defaultValues:{
            title:"",
            desc:"",
        }
    })

 
    
const onsubmit = async(data) => {

    const formData = new FormData;
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('category', category);
    
     Array.from(image).forEach((file) => {
      formData.append('image', file);
    });
    
    console.log([...formData]); 
     
    try {
           const res = await axios.post(`/api/auth/uploads`,formData,
         {  headers: {
                    'Content-Type': 'multipart/form-data', // Important for handling file uploads
                }});
                
           if(res?.status === 201){
                console.log(res.data);
                alert('Post Created Sucessfully')
           }
           reset()
    } catch (error) {
        console.log(error);  
    }
}



const handleChange = (e) => {
    // Ensure that a file is selected before updating the state
    if (e.target.files.length > 0) {
        setImage(e.target.files);
    }
};
     


  return (
    <main className="space-y-5">
             <div className="flex items-center justify-center">
                     <h1 className="text-4xl">Create Post</h1>
             </div>

             <form encType="multipart/form-data" className="flex flex-col items-center gap-5  max-w-5xl mx-auto ">
                       <div className="flex w-full  flex-col items-center justify-between gap-3 ">

                           <div className="flex w-full flex-col space-y-2">
                           <h1 className="text-[20px] text-white">Title</h1>
                              <input {...register('title')} type="text" placeholder="Title" className="w-full py-5  rounded-md px-5 text-gray-600 " />
                              {errors && errors.title && <p className="text-red-500">{errors.title.message}</p> }
                           </div>

                           <div className="flex w-full flex-col  space-y-2">
                           <h1 className="text-[20px] text-white">Description</h1>        
                           <textarea {...register('desc')} type="text"  placeholder="Description" className="w-full h-[200px] rounded-md py-5 px-5 text-gray-600"/>
                           
                           
                        
                           {errors && errors.desc && <p className="text-red-500">{errors.desc.message}</p> }
                           </div>
                             
                             <div className="flex w-full flex-col space-y-2">
                                <h1  className="text-[20px] text-white">Category</h1>    

                             <select 
                                     value={category} onChange={e=> setCategory(e.target.value)}
                              
                                     name="category"
                                     id="category" className="text-black  rounded-md w-full py-2 px-4">
                                  <option value="category">Category</option>
                                  <option value="education">Education</option>
                                  <option value="music">Music</option>
                                  <option value="food">Food</option>
                                  <option value="travel">Travel</option>
                              </select>
                             </div>

                             <div>
                                   <input name="image" multiple   type="file" onChange={handleChange} />
                             </div>
                       </div>

                       <div onClick={handleSubmit(onsubmit)} className="w-full flex items-center justify-center rounded-md hover:bg-green-600  bg-green-500">
                            <button  className="py-4 px-4 text-[16px] font-semibold flex items-center justify-center">{isSubmitting ? "Posting" : "Post"}</button>
                       </div>

             </form>
    </main>
  )
}

export default CreatePost
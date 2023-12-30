import Comments from "../features/Comments";
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {DateTime} from "luxon"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MusicRelated from "../relatedPost/MusicRelated";
import CommentSection from "../features/CommentSection";

const SingleMusicPost = () => {
  const navigate = useNavigate()
   const {id} = useParams()
  // console.log(id);
    const [postDetails, setPostDetails] = useState(null);

    const session = JSON.parse(localStorage.getItem("CurrentUser")) 

    useEffect(()=>{
      const fetchSinglePost = async() => {
          const res = await fetch(`/api/auth/music/${id}`)
          const data = await res.json()
          // console.log(data);
          setPostDetails(data)
         
      }
      fetchSinglePost()
  },[id])


    // Delete the post
 const deletePost = async () => {
  try {
       const res = await axios.delete(`/api/auth/music/${id}`)
       if(res?.status === 200){
           navigate('/music')
       }
  } catch (error) {
     console.log(error);
  }
}


  return (
    <main className="max-w-6xl mt-5 mx-auto">

    {/* Image Section */}
   {postDetails && (
      <>
      <div className="" key={postDetails.id}>
          <div>
        <img src={postDetails.image} alt="" className="w-full object-cover h-[250px] md:h-[300px] rounded-[5px]  lg:h-[600px]" />
          </div>

          <div className="space-y-4">
                   
                    <div className="flex items-center mt-4 gap-4">
                            <img src="https://thumbs.dreamstime.com/b/portrait-mature-man-smiling-camera-stock-image-88913449.jpg" alt="" className="w-10 h-10 object-cover rounded-full" />

                            <div>
                                <h1 className="text-[14px]">Amar Mahato</h1>
                                <p className="text-[12px]">Publish - <span className="text-gray-300">
                                {DateTime.fromISO(postDetails.createdAt).toLocaleString(DateTime.DATETIME_MED)}</span> </p>
                            </div>

                           {session?.admin?.role === "admin" && <div className="flex items-center gap-2">
                                   <Link to={`/music/update/${id}`} className="cursor-pointer bg-green-400 rounded-full px-2 py-2 text-gray-700"><RiEdit2Fill /></Link>
                                   <button  className="cursor-pointer bg-green-400 rounded-full px-2 py-2 text-gray-700">
                                   <AiFillDelete onClick={deletePost} />
                                   </button>
                            </div>}
                    </div>

                    <h1 className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold">{postDetails.title}</h1>

          </div>
        
    </div>
         

  {/* Section 2 */}

    <div className="flex gap-14 py-10">
            {/* Details */}
           <div className="flex-wipper">
                  <p className="text-[15px] lg:text-[17px]">{postDetails.desc}</p>
                 
                 <div className="py-4">
                     <Comments/>

                 </div>

                 <div>
                     <CommentSection/>
                 </div>
           </div>

            {/* Related Section */}
            <div className="flex-item hidden lg:block">
                     <h1 className="text-[30px] line-clamp-1 font-semibold">Related Post</h1>
                     <MusicRelated currentPostId={postDetails.id}/>
            </div>
    </div>
  </>
)}
</main>
  )
}

export default SingleMusicPost
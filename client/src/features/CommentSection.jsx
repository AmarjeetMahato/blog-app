
import { useEffect, useState } from "react"
import {DateTime} from "luxon"

   
const CommentSection = () => {
  const [comments, setComments] = useState()
    
  console.log(comments);
  
  useEffect(()=>{
    const fetchSinglePost = async () => {
      try {
        const res = await fetch(`/api/auth/allmessage`);
        const data = await res.json();
        console.log(data);
    
        const commentsWithUserDetails = await Promise.all(
          data.map(async (comment) => {
            console.log('comment.userId:', comment.userId);

            const userRes = await fetch(`/api/auth/alluser/${comment.userId}`);
            const userData = await userRes.json();
            console.log('userData:', userData);

        const user = userData.find(
          (user) => String(user.id) === String(comment.userId)
        );

            console.log(user);
            return {
              ...comment,
              userName: user?.name || 'Unknown',
              userImage: user?.image || 'default-image-url',
            };
          })
        );
    
        setComments(commentsWithUserDetails);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error case, e.g., by setting default values
        setComments([]);
      }
    };
    
    fetchSinglePost();
    
},[])
  return (
    <div className='mt-2'>
           <div className="gap-5">
                 {comments && comments.map((comment)=>(
                  <>
                      <div key={comment.id} className="space-y-1">
                        <div className="flex items-center">
                               <h3>{comment.name}</h3>
                               <p className="text-[10px]">{DateTime.fromISO(comment.createdAt).toLocaleString(DateTime.DATETIME_MED)}</p>
                               
                        </div>
                        <div>
                        <p >{comment.comment}</p>
                        </div>
                        
                     
                      </div>
                  </>
                 ))}      
           </div>
    </div>
  )
}

export default CommentSection
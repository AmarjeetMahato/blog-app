import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Music = () => {

   const [filter, setFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/auth/post`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      const filter = data.filter((item) => item.category === "music");
      filter.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      setFilter(filter);
      console.log(filter);
    };
    fetchData();
  }, []);

  return (
   <div className="lg:px-10">
   <div className="flex items-center mb-3 justify-center">
     <h1 className="text-[40px] ">Explore the music</h1>
   </div>

   <div className="md:max-w-[1320px] w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[4px] md:px-[20px]">
  
       {filter &&
         filter.map((item) => (
           <>
             <div  key={item.id} className="bg-[#0f172a]  shadow-md shadow-black ">
               <div>
                 <img
                   src={item.image}
                   alt=""
                   className="object-cover lg:h-[300px] md:h-[200px] w-full"
                 />
               </div>

               <div className="p-4">
                 <h1 className="text-[22px] ">
                   {item.title.substring(0, 30)}..
                 </h1>
                 <p className="text-[14px] py-1">
                   {item.title.substring(0, 100)}..
                 </p>
                 <Link
                   to={`/music/${item.id}`}
                   className="border-b-2 py-2 border-red-500"
                 >
                   Read More..
                 </Link>
               </div>
             </div>
           </>
         ))}
     
   </div>
 </div>
  )
}

export default Music
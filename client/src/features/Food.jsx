import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiMaskSad } from "react-icons/pi";

const Food = () => {
  const [filter, setFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`api/auth/post`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      const filter = data.filter((item) => item.category === "food");
      filter.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      setFilter(filter);
      console.log(filter);
    };
    fetchData();
  }, []);
  return (
    <div className="lg:px-10">
     
               <div className="md:max-w-[1320px]  w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[4px] md:px-[20px]">
          {filter && filter.length >0  &&  (filter.map((item) => (
              <>
                <div  key={item.id} className="bg-[#0f172a]   shadow-md shadow-black ">
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover lg:h-[300px] md:h-[200px] w-full"
                    />
                  </div>

                  <div className="p-4">
                    <h1 className="lg:text-[22px] text-[18px] ">
                      {item.title.substring(0, 30)}..
                    </h1>
                    <p className="text-[14px] py-1">
                      {item.title.substring(0, 100)}..
                    </p>
                    <Link
                      to={`/food/${item.id}`}
                      className="border-b-2 py-2 border-red-500"
                    >
                      Read More..
                    </Link>
                  </div>
                </div>
                
              </>
            )))
          }
          </div>

          {filter && filter.length < 0 && 
            <div>
              <p className="flex  items-center mx-auto justify-center min-h-screen text-[25px] text-white gap-1"><PiMaskSad size={40} /> No Post Found </p>
            </div>
       
          }
    </div>
  );
};

export default Food;

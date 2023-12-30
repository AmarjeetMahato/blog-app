import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const TravelPost = () => {
   
  const [filter, setData] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
        const res = await fetch(`api/auth/post`)
        if(!res.ok){
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        const filter = data.filter(item => item.category === "travel")
        filter.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        const filterData = filter.slice(0,5)
        setData(filterData);
        console.log(filter);
    }
    fetchData()
  },[])




  return (
       <div className="">
          <div className="posts mt-[50px] flex flex-col gap-10">
                  <div className="flex items-center justify-between">
                      <h1 className="text-[20px]  md:text-[30px] font-semibold uppercase border-b border-red-500 w-max">Travel Post</h1>
                       
                      <Link to="/travel" className="flex items-center gap-1">See all</Link>
                  </div>
              {filter && filter.map((item) => (
               <>
               <div key={item.id} className={`flex   items-center   gap-[100px]`}>
                    <div className="img flex-content hidden md:block">
                       {item.image && <img src={item.image} alt="" className="w-full  lg:h-[300px] md:h-[200px]  object-cover shadow-lg shadow-black"/>}
                    </div>
                    <div className="content flex-item2 space-y-5">
                         <Link>
                            <h1 className="lg:text-[30px] font-semibold text-[16px] md:text-[20px] ">{item.title.substring(0,40)}..</h1>
                         </Link>

                         <p className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-400">{item.desc.substring(0,300)}..</p>
                          
                          <Link to={`/travel/${item.id}`}>

                                <button className="border-b-2 border-red-500 mt-[5px]">
                                  <span className="text-[12px] md:text-[16px] lg:text-[18px]">Read More</span>
                                </button>
                          </Link>
                    </div>

              </div>
               </>
              ))
}

            
                 
          </div>

       </div>
  )
}

export default TravelPost
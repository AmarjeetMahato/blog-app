import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const HomeFeed = () => {
   
  const [filter, setData] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
        const res = await fetch(`api/auth/post`)
        if(!res.ok){
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        const filter = data.slice(0,10) 
        // const filter = data.filter(item => item.category === "food")
        setData(filter);
        console.log(filter);
    }
    fetchData()
  },[])




  return (
       <div className="">
          <div className="posts mt-[50px] flex flex-col gap-10">
              {filter && filter.map((item,index) => (
               <>
               <div key={item.id} className={`flex   items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}  gap-[100px]`}>
                    <div className="img flex-content hidden md:block">
                       {item.image && <img src={item.image} alt="" className="w-full  lg:h-[300px] md:h-[200px]  object-cover shadow-lg shadow-black"/>}
                    </div>
                    <div className="content flex-item2 space-y-5">
                         <Link>
                            <h1 className="lg:text-[30px] font-semibold text-[16px] md:text-[20px] ">{item.title.substring(0,40)}..</h1>
                         </Link>

                         <p className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-400">{item.desc.substring(0,300)}..</p>
                          
                          <Link to={`/post/${item.id}`}>

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

export default HomeFeed